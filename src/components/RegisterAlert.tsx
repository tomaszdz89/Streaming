import React from 'react'
import Alert from '@mui/material/Alert'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const RegisterAlert = (): JSX.Element => {
  const { message, isError } = useSelector((state: RootState) => state.auth)

  return (
    <Alert sx={{ width: '100%', justifyContent: 'center' }} severity={isError ? 'error' : 'success'}>{message}</Alert>
  )
}

export default RegisterAlert
