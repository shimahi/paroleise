import { css } from '@emotion/core'
import Link from 'next/link'

export const Works = () => {
  return (
    <section css={works}>
      <h3>WORKS</h3>
      <Link href="/works">
        <a>MORE</a>
      </Link>
    </section>
  )
}

const works = css`
  height: 600px;
  padding: 0 5%;
`
