import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'

import authService from '../services/auth.service'

interface UserData {
  name: string
  email: string
  accessToken: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

interface Error {
  message: string[]
  statusCode: number
}

interface InitialState {
  user: UserData | null
  isError: boolean
  message: null | string
}

const user = JSON.parse(localStorage.getItem('user') ?? '{}')

export const register = createAsyncThunk(
  'auth/register',
  async (values: RegisterData, thunkAPI) => {
    try {
      const response = await authService.register(values)
      return response.data
    } catch (err) {
      const error = err as AxiosError<Error>
      return thunkAPI.rejectWithValue(error.response?.data.message)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (values: LoginData, thunkAPI) => {
    try {
      const response = await authService.login(values)
      localStorage.setItem('user', JSON.stringify(response.data))
      return response.data
    } catch (err) {
      const error = err as AxiosError<Error>
      return thunkAPI.rejectWithValue(error.response?.data.message)
    }
  }
)

export const logoutt = createAsyncThunk<{}, {}, { state: { auth: InitialState } }>(
  'auth/logout',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState()
    if (auth.user !== null) { await authService.logoutt(auth.user.accessToken) }
  }
)

export const refresh = createAsyncThunk<{}, {}, { state: { auth: InitialState } }>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const response = await authService.refresh()
    return response.data
  }
)

const initialState: InitialState = {
  user,
  isError: false,
  message: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.isError = false
      state.message = `User ${action.payload.name} has been successfully registered`
    })
    builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
      state.isError = true
      state.message = action.payload
    })
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.isError = false
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.isError = true
      state.message = action.payload
    })
    builder.addCase(logoutt.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = null
    })
    builder.addCase(refresh.fulfilled, (state, action: PayloadAction<any>) => {
      if (state.user !== null) {
        state.user.accessToken = action.payload
      }
    })
  }
})

const { reducer } = authSlice
export default reducer
