import { NavigateFunction } from 'react-router-dom'

interface History {
  navigate: any | NavigateFunction
}

export const history: History = {
  navigate: null
}
