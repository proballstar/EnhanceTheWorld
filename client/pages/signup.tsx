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

  const handleSignup = async (e: any) => {
    e.preventDefault()
  }

  

  return (
    <></>
  )
}

export default Signup