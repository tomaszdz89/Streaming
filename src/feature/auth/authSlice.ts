import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  value: boolean
  user: string
}

const initialState: AuthState = {
  value: true,
  user: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus: (state) => {
      state.value = !state.value
    //   state.value = action.payload
    }
  }
})

export const { changeAuthStatus } = authSlice.actions

export default authSlice.reducer
