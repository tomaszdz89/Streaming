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
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../slices/auth'
import RegisterAlert from './RegisterAlert'

const Register = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = (): void => setShowPassword((show) => !show)
  const dispatch = useDispatch<any>()
  const { message } = useSelector((state: RootState) => state.auth)

  const validationSchema = yup.object({
    name: yup
      .string().min(4, 'Name must be at least 4 characters')
      .max(12, 'Name must be less than 12 characters')
      .required('Name is required'),
    email: yup
      .string().email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string().min(8, 'Password must be at least 8 characters')
      .max(15, 'Password must be less than 15 characters')
      .required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(register(values))
    }
  })

  return (
    <>
    <Paper
      elevation={3}
      style={{
        maxWidth: '600px',
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
            Sign up with your email
          </Typography>
          <Typography variant="body2">
            Already have an account? <Link to="/login">Sign in</Link>
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column" gap="10px">
            <TextField
              label="Name"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={Boolean(formik.touched.name) && Boolean(formik.errors.name)}
            ></TextField>
            {(Boolean(formik.touched.name) && Boolean(formik.errors.name)) ? <Typography color="error" variant="body2">{formik.errors.name}</Typography> : null}
            <TextField
              label="Email Address"
              name="email"
              id="email"
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
              Create account
            </Button>
          </Grid>
        </form>
      </Box>
      {Boolean(message) && <RegisterAlert/>}
    </Paper>
    </>
  )
}

export default Register
