import axios, { AxiosResponse } from 'axios'

const API_URL = 'http://localhost:3001/users'

interface UserData {
  name: string
  email: string
  password: string
}

const register = async (values: UserData): Promise<AxiosResponse<any, any>> => {
  return await axios.post(API_URL, values)
}

const authService = {
  register
}

export default authService
