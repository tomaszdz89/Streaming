import { Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { logout } from '../slices/auth'

const Profile = (): JSX.Element => {
  const dispatch = useDispatch<any>()

  const onLogout = (): void => {
    dispatch(logout({}))
  }

  const { user } = useSelector((state: RootState) => state.auth)
  const name = user?.name

  return (
    <>
      {Boolean(name) && <Typography>Hi, {name}</Typography>}
      <Button
        variant="contained"
        color="primary"
        style={{
          marginTop: '10px',
          width: '258px',
          height: '56px',
          textTransform: 'capitalize'
        }}
        onClick={onLogout}
      >
        Logout
      </Button>
    </>
  )
}

export default Profile
