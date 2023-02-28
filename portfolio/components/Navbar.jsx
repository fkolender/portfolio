import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
      
      <nav>
        <div className='logo'>
            <Link href='/'><Image src='/logo.svg' alt="logo" width={250} height={100}/></Link>
        </div>
        <Link href='/'>Home 🏕️</Link>
        <Link href='/about'>About 📃</Link>
        <Link href='/projects'>Projects 💻</Link>

      </nav>
  )
}

export default Navbar