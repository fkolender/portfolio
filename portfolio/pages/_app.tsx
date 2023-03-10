import '../public/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout.jsx'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
