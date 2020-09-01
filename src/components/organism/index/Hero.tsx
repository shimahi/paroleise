import { css } from '@emotion/core'
import { blue } from 'style'

export const Hero = () => {
  return <section css={hero} />
}

const hero = css`
  background-color: ${blue};
  width: 100vw;
  height: 100vh;
`
