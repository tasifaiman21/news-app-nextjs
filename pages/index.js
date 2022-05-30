import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className='page-container'>

<Nav/>
<div className={styles.main}>
<h1>News App!!</h1>

<h2>Read Latest News Articles Online.</h2>
</div>

</div>
  )
}
