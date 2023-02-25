import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Couldn't find the requested resource :/</h2>
        <div>Click <Link href='/projects'>here</Link> to see other projects or back to my <Link href='/'>landing page</Link></div>
    </div>
  )
}

export default NotFound