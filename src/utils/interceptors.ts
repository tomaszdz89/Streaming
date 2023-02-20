import { axiosAuth } from './axios'
import { refresh } from '../slices/auth'

const setup = (store: any): void => {
  axiosAuth.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response.status === 401) {
        const data = await store.dispatch(refresh({}))

        error.config.headers.Authorization = `Bearer ${data.payload.accessToken}`

        return await axiosAuth.request(error.config)
      }

      return await Promise.reject(error)
    }
  )
}

export default setup
