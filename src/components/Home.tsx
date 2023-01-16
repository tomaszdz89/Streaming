import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAuthStatus } from '../feature/auth/authSlice'
import { RootState } from '../app/store'

const Home = (): JSX.Element => {
  const dispatch = useDispatch()

  const authState = useSelector((state: RootState) => state.authReducer.value)

  const handleClick = (): void => {
    dispatch(changeAuthStatus()); console.log(authState)
  }

  return (
    <div>
      <h1>Homeee</h1>
      <button onClick={handleClick}>Change redux status</button>
      {/* {authState && <h2>User logged in</h2>} */}
    </div>
  )
}

export default Home
