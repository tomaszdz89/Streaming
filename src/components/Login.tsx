import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const Login = (): JSX.Element => {
  return (
    <Box component="form">
      <div style={{ marginBottom: '10px' }}>
        <TextField label="Login"></TextField>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField label="Password" type="password"></TextField>
      </div>
      <div>
        <Button variant="contained">Submit</Button>
      </div>
    </Box>
  )
}

export default Login
