import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { Container } from '@mui/material'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = (): JSX.Element => {
  const [auth, setAuth] = React.useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuth(event.target.checked)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" elevation={0}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <Typography
                  variant="h6"
                  component="div"
                  textAlign={'left'}
                >
                  Striming
                </Typography>
              </Link>
            </Box>
            {auth
              ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
                )
              : (
              <Nav />
                )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
