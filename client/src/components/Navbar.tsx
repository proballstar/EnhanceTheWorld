import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter, NextRouter } from 'next/router';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const navigation = [
    { name: 'Create an Event', href: '/auth/events/create', current: true },
    { name: 'View Events', href: '/auth/events/all', current: false },
    { name: 'View Profile', href: '/auth/user/you', current: false },
    { name: 'View Heroes', href: '#', current: false },
  ]

const Unauthetnciated = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  

function ContainsUser() {
  const router: NextRouter = useRouter()
  const { logout } = useAuth()
  return (
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
      <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
  )
}

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav  className="text-gray-400 border-b border-gray-500">
      <div>
        <Link href="/" passHref>
          <h1 className='text-4xl font-bold'>NextJS Firebase Auth</h1>
        </Link>
        <nav id="basic-navbar-nav">
          <nav className="me-auto">
            {user ? (
              <ContainsUser />
            ) : (
              <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {Unauthetnciated.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
            )}
          </nav>
        </nav>
      </div>
    </nav>
  )
}

export default NavbarComp
