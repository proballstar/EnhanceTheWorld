import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '../src/context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login, google } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState(<></>)

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
    </div>
  )
}

export default Login