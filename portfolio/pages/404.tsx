import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Spinner } from 'flowbite-react'

const _404 = () => {
  const router = useRouter()

    useEffect(() => {
      setTimeout(() =>
    {router.push('/')}, 3000)
    }, [])




  return (
    <>
    <div className='not-found'>
        <h2>Couldn't find the requested resource 🔭🚫</h2>
        <div>Sending you back...</div><Spinner color="info"/>
    </div>
    </>
  )
}

export default _404