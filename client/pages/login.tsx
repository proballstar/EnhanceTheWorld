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
    
    const handleGoogle = async (e: any) => {
      try {
        await google('login')
      } catch (err) {
        setMessage(<div>{err.code}</div>)
      }
        router.push('/auth/events/all')
    }
    // TODO: Add message error handle(REF: "./signup.tsx")

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/auth/events/all')
    } catch (err) {
      setMessage(<div>{err.code}</div>)
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}

            type="password"
            placeholder="Password"
          />
        </div>
        <button className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-md' type="submit">
          Login
        </button>
        <button onClick={e => handleGoogle(e)} className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-md' type="button">
          Login with Google
        </button>  
        {message}
      </form>
    </div>
  )
}

export default Login