import Link from 'next/link'

const Navbar = () => {
  return (
      
      <nav>
        <div className='logo'>
            <Link href='/'><img src='/logo.svg' alt="logo" /></Link>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Project Listing</Link>

      </nav>
  )
}

export default Navbar