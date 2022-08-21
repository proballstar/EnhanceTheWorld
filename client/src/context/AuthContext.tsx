import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../config/firebase'
import React from 'react'
import axios from 'axios';
import ROUTES from '../api/routes';
import { UserByEmail, UserByGoogle } from './FetchContext'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = async (email: string, password: string, bio: string, name: string, profile: File, merch: string, paypal: string, wallet: string) => {
    try { 
      let user = await createUserWithEmailAndPassword(auth, email, password)
      await UserByEmail(user.user.uid, bio, name, profile, merch, paypal, wallet)
    } catch (error) {
      throw new Error(error)
    }
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const google = async (method: 'login' | 'signup') => {
    try { 
      if (method == 'signup') {
        let bio = prompt("Please add a bio...")
        let wallet = prompt("Please add your crypto address (optional)")
        let paypal = prompt("Please add your paypal link (optional)")
        let merch = prompt("Please add your merchandise link (optional)")
        let user = await signInWithPopup(auth, new GoogleAuthProvider())
        await UserByGoogle(user.user.uid, bio, user.user.displayName, user.user.photoURL, paypal, wallet, merch)
      } else {
        await signInWithPopup(auth, new GoogleAuthProvider())
      }
      
    } catch (error) {
      throw new Error(error)
    }
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, google }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}