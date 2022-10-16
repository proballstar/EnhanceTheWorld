import React from "react";
import { Form, useFormik } from "formik";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter, NextRouter } from "next/router";
import { useAuth } from '../src/context/AuthContext';
import { getAuth } from 'firebase/auth';
import styles from '../styles/c.module.scss'

export default function Signup() {
  let router: NextRouter = useRouter();
  const { google, signup } = useAuth()
  const [profile, setProfile] = React.useState<File>()

  let { handleChange, handleSubmit, values, errors } = useFormik<{
    email: string;
    password: string;
    bio: string;
    fullName: string;
    merch: string;
    paypal: string;
    wallet: string;
  }>({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      bio: "",
      merch: "",
      paypal: "",
      wallet: "",
    },
    onSubmit: async (v, h) => {
      h.setSubmitting(true)
      signup(v.email, v.password, v.bio, v.fullName, profile, v.merch, v.paypal, v.wallet );
      h.setSubmitting(false);
    },
  });

  async function Google() {
    await google('signup')
  }

  return (
    <section>
      <div className="flex flex-wrap">
        <div className="pb-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto">
            <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
              <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <a
                className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200"
                href="#"
              >
                Register
              </a>
            </div>
            <div>
              <div className="mb-6 px-3">
                <span className="text-gray-500">Register</span>
                <h3 className="text-2xl font-bold">Create an account</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      name="fullName"
                      onChange={handleChange}
                      value={values.fullName}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    className="w-full text-xs bg-gray-50 outline-none"
                    placeholder="name@email.com"
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    className="w-full text-xs bg-gray-50 outline-none"
                    placeholder="Enter your password"
                  />
                  <button>
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      name="bio"
                      onChange={handleChange}
                      value={values.bio}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Biography"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      name="merch"
                      onChange={handleChange}
                      value={values.merch}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Merchandise (optional)"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      name="paypal"
                      onChange={handleChange}
                      value={values.paypal}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Paypal URL (optional)"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-1/2 px-2">
                    <input
                      name="wallet"
                      onChange={handleChange}
                      value={values.wallet}
                      className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                      type="text"
                      placeholder="Crypto Wallet ID (optional)"
                    />
                  </div>
                </div>
                <div className="p-3 my-4">
                    <label className={styles.label}>
                        Profile Picture:
                    </label>
                    <input name='file' className={styles.file} type={'file'} onChange={e => setProfile(e.target.files[0])} />
                </div>
                <div className="px-3 text-center">
                  <button
                    type="submit"
                    className="mb-2 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                  >
                    Register
                  </button>
                  <p className="p-3">OR</p>
                  <button
                    type="submit"
                    className="mb-2 w-full py-4 border-2 border-blue-600 hover:border-blue-700 rounded text-sm font-bold text-blue-500 hover:text-blue-600 transition duration-200"
                  >
                    Create an account with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full lg:w-1/2">
          <div className="absolute inset-0 bg-gray-800 z-10 opacity-50"></div>
          <img
            className="absolute inset-0 h-full ml-auto object-cover z-0"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVIqd1H0ybFvcZV4J6I8-lGd3iyxF15_r2A&usqp=CAU"
            alt=""
          />
          <div
            className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
            style={{ zIndex: 10 }}
          >
            <h2 className="mb-2 text-2xl text-white font-bold font-heading">
              So much more than an event creator tool
            </h2>
            <div className="max-w-lg mx-auto mb-6">
              <p className="text-gray-300 leading-loose">
                A application that allows you to connect with the rest of the
                world and make a change.
              </p>
            </div>
            <div className="mt-12 flex justify-center space-x-3"></div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative w-full">
            <img
              className="relative mb-4 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVIqd1H0ybFvcZV4J6I8-lGd3iyxF15_r2A&usqp=CAU"
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 mb-10 flex justify-center space-x-3">
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-blue-600 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
            </div>
          </div>
          <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
            <h2 className="mb-2 text-2xl font-bold">
              So much more than an event creater tool
            </h2>
            <p className="mb-6 text-gray-500 leading-loose">
              Use it to change the world in unimaginable ways
            </p>
            <a
              className="inline-block py-2 px-6 rounded-t-xl rounded-l-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
