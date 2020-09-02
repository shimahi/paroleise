import { css } from '@emotion/core'
import Link from 'next/link'

export const News = () => {
  return (
    <section css={news}>
      <h3>NEWS</h3>
      <Link href="/news">
        <a>MORE</a>
      </Link>
    </section>
  )
}

const news = css`
  height: 600px;
  padding: 0 5%;
`
