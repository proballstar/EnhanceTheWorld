import { useRouter, NextRouter} from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { useAuth } from '../src/context/AuthContext'
import Link from 'next/link';

interface SignUpData {
  email: string;
  password: string;
  profile: null | File[] | File;
  bio: string;
  name: string;
}

const Signup = () => {
    const router: NextRouter = useRouter()
  const { user, signup, google } = useAuth()
  console.log(user)
  const [data, setData] = useState<SignUpData>({
    email: '',
    password: '',
    profile: null,
    bio: '',
    name: ''
  })
  const [message, setMessage] = useState(<></>)

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      alert(JSON.stringify(data))
      console.table(data)
      console.log(data.profile[0].name)
      await signup(data.email, data.password, data.bio, data.name, data.profile[0])
      router.push('/auth/events/all')
    } catch (err) {
        console.log(JSON.stringify(err))
        console.table(err)
        setMessage(<div>
            {err.code ? err.code.split('/')[1].replace('-', ' ') : JSON.stringify(err)}
        </div>)
    }

    console.log(data)
  }

  async function handleGoogle() {
    try {
      await google('signup')
      router.push('/auth/events/all')
    } catch (error) {
      setMessage(<div>
        {error.code ? error.code : JSON.stringify(error)}
      </div>)
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input
            type={"text"}
            placeholder="Text..."
            required
            onChange={(e: any) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            value={data['name']}
          />
        </div>
        <div className="mb-3">
          <label>Bio/Description</label>
          <textarea
            placeholder="Bio..."
            required
            onChange={(e: any) =>
              setData({
                ...data,
                bio: e.target.value,
              })
            }
            value={data.bio}
        />
        </div>
        <div className="mb-3">
          <label>Profile</label>
          <input
            accept="image/*"
            type="file"
            required
            onChange={(e: ChangeEvent<any>) =>
              setData({
                ...data,
                profile: e.target.files,
              })
            }
          />
        </div>

        <button className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-md' type="submit">
          Signup
        </button>
        <button onClick={() => handleGoogle()} className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-md' type="submit">
          Google
        </button>
        {message}
        <div>
          <p>Already have an account?</p>
          <Link href="/login">
            Login!
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup