import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar'
import { AuthContextProvider } from '../src/context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
import { useAuth } from '../src/context/AuthContext';
import { useEffect } from 'react';
import UnProtectedRoute from '../src/components/UnProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    console.log(auth)
  }, [auth])

  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <UnProtectedRoute>
          <Component {...pageProps} />
        </UnProtectedRoute>
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp