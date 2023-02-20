import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user'

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "Ritik", age: 23, email: "ritik@gmail.com" }))
      }}>Login</button>
    </div>
  )
}

export default Login
