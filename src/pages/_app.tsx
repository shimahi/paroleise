import { AppProps } from 'next/app'
import 'ress'
import 'nprogress/nprogress.css'
import { Global, css } from '@emotion/core'
import { textColor, canvasColor } from 'style'
import AppProvider from 'store'

import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </>
    </AppProvider>
  )
}

export default App

const globalStyles = css`
  html {
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    height: 100%;
    background-color: ${canvasColor};
    color: ${textColor};
  }
  a {
    text-decoration: none;
    color: ${textColor};
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  * {
    letter-spacing: 1px;
  }

  /* * {
    outline: solid 1px rgba(100, 255, 200, 1);
  } */

  a,
  button,
  input[type='radio'] + label,
  input[type='checkbox'] + label {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  #nprogress .spinner {
    top: 50vh;
    right: 50vw;
    opacity: 0.4;
  }
`
