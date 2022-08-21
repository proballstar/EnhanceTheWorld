import { useRouter, NextRouter} from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { useAuth } from '../src/context/AuthContext'
import Link from 'next/link';
import GoogleRegister from '../src/components/Signup/Google';
import RegisterInput from '../src/components/Signup/SignupInputs';

interface SignUpData {
  email: string;
  password: string;
  profile: null | File[] | File;
  bio: string;
  name: string;
  merch: string;
  paypal: string;
  wallet: string;
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
    name: '',
    merch: "",
    paypal: "",
    wallet: ""
  })
  const [message, setMessage] = useState(<></>)

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      alert(JSON.stringify(data))
      await signup(data.email, data.password, data.bio, data.name, data.profile[0])
      router.push('/auth/events/all')
    } catch (err) {
        setMessage(<div>
            {err.code ? err.code.split('/')[1].replace('-', ' ') : JSON.stringify(err)}
        </div>)
    }

    console.log(data)
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
        <RegisterInput
          dataval={data}
          name={"email"}
          placeholder={""}
          required
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"password"}
          placeholder={""}
          required
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"name"}
          placeholder={""}
          required
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"bio"}
          placeholder={""}
          required
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"merch"}
          placeholder={""}
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"paypal"}
          placeholder={""}
          setData={setData}
        />
        <RegisterInput
          dataval={data}
          name={"wallet"}
          placeholder={""}
          setData={setData}
        />
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
        <GoogleRegister
          google={google}
          router={router}
          setMessage={setMessage}
        />
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