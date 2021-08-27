import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.title}>
      <h1 className={styles.text}>Home </h1>
      <p className={styles.text}>lorem</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listings</a>
      </Link>
    </div>
  )
}
