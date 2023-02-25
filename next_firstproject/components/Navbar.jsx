import Link from 'next/link'

const Navbar = () => {
  return (
      
      <nav>
        <div className='logo'>
            <Link href='/'><h1>Francisco Kolender</h1></Link>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Project Listing</Link>

      </nav>
  )
}

export default Navbar