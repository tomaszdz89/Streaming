import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { logoutt, refresh } from '../slices/auth'

const Profile = (): JSX.Element => {
  const dispatch = useDispatch<any>()

  const test = (): void => {
    dispatch(logoutt({}))
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
        <button onClick={test}>test</button>
        <button onClick={testtest}>refresh</button>
    </>
  )
}

export default Profile
