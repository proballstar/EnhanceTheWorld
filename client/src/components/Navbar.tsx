import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <nav  className="text-gray-400 border-b border-gray-500">
      <div>
        <Link href="/" passHref>
          <h1 className='text-4xl font-bold'>NextJS Firebase Auth</h1>
        </Link>
        <nav id="basic-navbar-nav">
          <nav className="me-auto">
            {user ? (
              <div>
                <button
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                  className="px-4 py-2 bg-gray-400 text-black hover:shadow-md hover:rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <button className="px-4 py-2 bg-gray-400 text-black hover:shadow-md hover:rounded-md">Signup</button>
                </Link>
                <Link href="/login" passHref>
                  <button className="px-4 py-2 bg-gray-400 text-black hover:shadow-md hover:rounded-md">Login</button>
                </Link>
              </>
            )}
          </nav>
        </nav>
      </div>
    </nav>
  )
}

export default NavbarComp