import Link from 'next/link'
import { Text } from 'components/atoms/Typography'
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
          <Text size={0.9} as="a">
            paroleise
          </Text>
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
