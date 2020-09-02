import { css } from '@emotion/core'
import { borderColor } from 'style'

export const ScreenBorder = () => {
  return (
    <>
      <i css={screenBorder__top} />
      <i css={screenBorder__right} />
      <i css={screenBorder__bottom} />
      <i css={screenBorder__left} />
    </>
  )
}

const screenBorder = css`
  position: fixed;
  background-color: ${borderColor};
`
const margin = '8px'
const borderWidth = '3px'

const screenBorder__top = css`
  ${screenBorder}
  height: ${borderWidth};
  top: ${margin};
  left: ${margin};
  width: calc(100% - ${margin} * 2);
`

const screenBorder__right = css`
  ${screenBorder}
  width: ${borderWidth};
  top: ${margin};
  height: calc(100% - ${margin} * 2 + ${borderWidth});
  left: calc(100% - ${margin});
`

const screenBorder__bottom = css`
  ${screenBorder}
  height: ${borderWidth};
  top: calc(100% - ${margin});
  left: ${margin};
  width: calc(100% - ${margin} * 2);
`

const screenBorder__left = css`
  ${screenBorder}
  width: ${borderWidth};
  top: ${margin};
  height: calc(100% - ${margin} * 2);
  left: ${margin};
`
