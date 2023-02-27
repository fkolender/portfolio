import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>{`${children.type.name} | fkolender`}</title>
    </Head>
    <div className="content">
        <Navbar />
            {children}
        <Footer />
    </div>
  </>
  )
} 

export default Layout