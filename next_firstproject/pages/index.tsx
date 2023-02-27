import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
  <>
    <div>
      <div className='text-white'>tango</div>
      <h1 className='title'>Portfolio</h1>
      <p className='text'>Sharing my code with the web.</p>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea rerum delectus saepe sed facere ab eos facilis? Perferendis nihil eius aperiam vel vitae sed dolor distinctio quod tenetur fugit?</p>
      <Link href='projects' className='btn'>Open</Link>
    </div>
  
  </>
  )
}
