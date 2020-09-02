import { ReactNode } from 'react'
import Head from 'next/head'
import { ScreenBorder } from 'components/atoms/ScreenBorder'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>paroleise</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;500&family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>{children}</main>
      <ScreenBorder />
    </>
  )
}

export default Layout
