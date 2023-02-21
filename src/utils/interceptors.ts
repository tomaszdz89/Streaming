import { axiosAuth } from './axios'
import { refresh } from '../slices/auth'
import { history } from '../helpers/history'

const setup = (store: any): void => {
  axiosAuth.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response.status === 401) {
        const data = await store.dispatch(refresh({}))
        if (data.error.message === 'Request failed with status code 401') {
          history.navigate('/login')
          return await Promise.reject(error)
        }

        error.config.headers.Authorization = `Bearer ${data.payload.accessToken}`

        return await axiosAuth.request(error.config)
      }

      return await Promise.reject(error)
    }
  )
}

export default setup
