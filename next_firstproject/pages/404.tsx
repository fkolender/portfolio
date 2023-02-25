import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

    useEffect(() => {
      setTimeout(() =>
    {router.push('/')}, 3000)
    }, [])




  return (
    <div className='not-found'>
        <h2>Couldn't find the requested resource 🔭🚫</h2>
        <div>Sending you back...</div>
    </div>
  )
}

export default NotFound