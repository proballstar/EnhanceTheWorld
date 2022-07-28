import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Next Firebase Auth</h1>
      {/* TODO: Use Homepage from Previous Projects */}
      <Link href={"/login"}>
        Signup Here
      </Link>
      <Link href={"/signup"}>
        Signup Here
      </Link>
    </div>
  )
}

export default Home