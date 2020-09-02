import Link from 'next/link'
import { HeaderLinkText } from 'components/atoms/Typography'
import { css } from '@emotion/core'
import { useIsXSmall } from 'lib/useMediaQuery'

export const Header = () => {
  const isXSmall = useIsXSmall()

  return (
    <header css={header}>
      {isXSmall ? (
        <p onClick={() => alert('clicked!!!')}>toggle</p>
      ) : (
        <Link href="/">
          <HeaderLinkText>paroleise</HeaderLinkText>
        </Link>
      )}
    </header>
  )
}

const header = css`
  position: fixed;
  top: 48px;
  right: 40px;
  z-index: 2;
`
