import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import { login, reset } from '../slices/auth'
import { useDispatch, useSelector } from 'react-redux'
import AuthAlert from './AuthAlert'
import { RootState } from '../app/store'

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = (): void => setShowPassword((show) => !show)
  const dispatch = useDispatch<any>()
  const { message } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e: any): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: any): void => {
    e.preventDefault()

    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <Paper
        elevation={3}
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '50px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          margin: 'auto'
        }}
      >
        <Box component="div">
          <Box component="div" marginBottom="20px">
            <Typography
              variant="h5"
              component={'h2'}
              marginBottom={1}
              fontWeight={700}
            >
              Sign in with your email
            </Typography>
            <Typography variant="body2">
              Don&apos;t have an account? <Link to="/register">Sign up</Link>
            </Typography>
          </Box>
          <form onSubmit={onSubmit}>
            <Grid container direction="column" gap="10px">
                <TextField
                  type="email"
                  label="Email Address"
                  id='email'
                  name='email'
                  value={email}
                  onChange={onChange}>
                </TextField>
                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                ></TextField>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: '10px',
                  width: '100%',
                  height: '56px',
                  textTransform: 'capitalize'
                }}
                type="submit"
              >
                Continue
              </Button>
            </Grid>
          </form>
        </Box>
        {Boolean(message) && <AuthAlert/>}
      </Paper>
      <Typography
        variant="body2"
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
      >
        <Link to={'/register'} className="link--primary">Forgot your password?</Link>
      </Typography>
    </div>
  )
}

export default Login
