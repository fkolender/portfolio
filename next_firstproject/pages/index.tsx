import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
  <>
    <div>
      <h1 className={styles.title}>Portfolio</h1>
      <p className={styles.text}>Sharing my code with the web.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea rerum delectus saepe sed facere ab eos facilis? Perferendis nihil eius aperiam vel vitae sed dolor distinctio quod tenetur fugit?</p>
      <Link href='projects' className={styles.btn}>Open</Link>
    </div>
  
  </>
  )
}
