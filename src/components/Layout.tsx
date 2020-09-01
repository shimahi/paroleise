import { ReactNode } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Document</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
