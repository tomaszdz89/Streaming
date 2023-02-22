import { AxiosResponse } from 'axios'
import { axiosBasic, axiosAuth } from '../utils/axios'

const API_URL = 'http://localhost:3001/'

interface RegisterData {
  name: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

const register = async (values: RegisterData): Promise<AxiosResponse<any, any>> => {
  return await axiosBasic.post(API_URL + 'users', values)
}

const login = async (values: LoginData): Promise<AxiosResponse<any, any>> => {
  return await axiosBasic.post(API_URL + 'auth/login', values, { withCredentials: true })
}

const logout = async (accessToken: string): Promise<AxiosResponse<any, any>> => {
  localStorage.removeItem('user')
  return await axiosAuth.get(API_URL + 'auth/logout', { withCredentials: true, headers: { Authorization: `Bearer ${accessToken}` } })
}

const refresh = async (): Promise<AxiosResponse<any, any>> => {
  return await axiosBasic.get(API_URL + 'auth/refresh', { withCredentials: true })
}

const authService = {
  register, login, logout, refresh
}

export default authService
