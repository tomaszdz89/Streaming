import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = (): void => setShowPassword((show) => !show)

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
          width: '100%',
          padding: 50,
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'center',
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
          <Box component="form">
            <Grid container direction="column" gap="10px">
              <FormControl style={{ width: '100%' }}>
                <TextField label="Email Address"></TextField>
              </FormControl>
              <FormControl style={{ width: '100%' }}>
                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
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
              </FormControl>
              <Button
                variant="contained"
                style={{
                  marginTop: '10px',
                  width: '100%',
                  height: '56px',
                  background: '#e1e1e1',
                  color: '#808080',
                  textTransform: 'capitalize'
                }}
              >
                Continue
              </Button>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Typography
        variant="body2"
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
      >
        <Link to={'/register'}>Forgot your password?</Link>
      </Typography>
    </div>
  )
}

export default Login
