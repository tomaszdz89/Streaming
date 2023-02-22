import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Container } from '@mui/material'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Header = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <Typography variant="h6" component="div" textAlign={'left'}>
                  Striming
                </Typography>
              </Link>
            </Box>
            {user?.name !== undefined
              ? (
              <div>
                <Link to="/profile">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    className='profile-button'
                  >
                    <AccountCircle />
                    <Typography>{user.name}</Typography>
                  </IconButton>
                </Link>
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
