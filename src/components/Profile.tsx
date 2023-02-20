import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { logoutt, refresh } from '../slices/auth'
import { useNavigate } from 'react-router-dom'

const Profile = (): JSX.Element => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

  const logout = (): void => {
    dispatch(logoutt({}))
    navigate('/')
  }

  const testtest = (): void => {
    dispatch(refresh({}))
  }

  const { user } = useSelector((state: RootState) => state.auth)
  const name = user?.name

  return (
    <>
        <p>elo</p>
        {name}
        <button onClick={logout}>logout</button>
        <button onClick={testtest}>refresh</button>
    </>
  )
}

export default Profile
