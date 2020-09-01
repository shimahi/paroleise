import { AppProps } from 'next/app'
import 'ress'
import { Global, css } from '@emotion/core'
import AppProvider from 'store'

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
  }

  a {
    text-decoration: none;
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

  * {
    outline: solid 1px rgba(100, 255, 200, 1);
  }

  a,
  button,
  input[type='radio'] + label,
  input[type='checkbox'] + label {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`
