import React, { useState } from 'react'
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
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = (): void => setShowPassword((show) => !show)

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(15, 'Password must be less than 15 characters')
      .required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

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
          <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column" gap="10px">
              <TextField
                label="Email Address"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
              ></TextField>
              {(Boolean(formik.touched.email) && Boolean(formik.errors.email)) ? <Typography color="error" variant="body2">{formik.errors.email}</Typography> : null}
              <TextField
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
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
              {(Boolean(formik.touched.password) && Boolean(formik.errors.password)) ? <Typography color="error" variant="body2">{formik.errors.password}</Typography> : null}
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
                disabled={!(formik.isValid && formik.dirty)}
              >
                Continue
              </Button>
            </Grid>
          </form>
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
