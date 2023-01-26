import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'

import AuthService from '../services/auth.service'

interface UserData {
  name: string
  email: string
  password: string
}

interface Error {
  message: string[]
  statusCode: number
}

interface InitialState {
  user: null
  isError: boolean
  message: null | string
}

export const register = createAsyncThunk(
  'auth/register',
  async (values: UserData, thunkAPI) => {
    try {
      const response = await AuthService.register(values)
      return response.data
    } catch (err) {
      const error = err as AxiosError<Error>
      return thunkAPI.rejectWithValue(error.response?.data.message)
    }
  }
)

const initialState: InitialState = {
  user: null,
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
  }
})

const { reducer } = authSlice
export default reducer
