import { css } from '@emotion/core'
import { sm, baseColor, canvasColor } from 'style'
import { CopyHeadingText, CopyText, CopySmallText } from 'components/atoms/Typography'
import { useIsXSmall } from 'lib/useMediaQuery'

export const Hero = () => {
  const isXSmall = useIsXSmall()

  return (
    <section css={hero}>
      <div css={hero__copy}>
        <CopyHeadingText>
          paroleise
          <i>/</i>
        </CopyHeadingText>
        <CopyText>
          illustration <br />
          typography {isXSmall && <br />} and music
        </CopyText>
        {!isXSmall && <CopySmallText css={heroCopy__small}>nankin iikanjino kotoba kokoni okitai</CopySmallText>}
      </div>
    </section>
  )
}

const hero = css`
  background: linear-gradient(${baseColor} 79.3%, ${canvasColor} 79.3%);
  width: 100%;
  height: 100vh;
  position: relative;
  ${sm} {
  }
`

const hero__copy = css`
  display: inline-block;
  position: absolute;
  top: calc(100% * 180 / 667);
  left: calc(100% * 24 / 375);
  ${sm} {
    top: calc(100% * 234 / 800);
    left: calc(100% * 190 / 1440);
  }
  i {
    font-weight: 300;
  }
`

const heroCopy__small = css`
  padding-top: 48px;
`
