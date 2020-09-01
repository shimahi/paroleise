import styled from '@emotion/styled'
import { sm, convertTrackingToEm } from 'style'

// フォント・フォントサイズ・フォントスタイル・カーニング・行間

export const CopyHeadingText = styled.h1`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  font-size: 1.625em;
  letter-spacing: ${convertTrackingToEm(230)};
  ${sm} {
    line-height: 1.838em;
    font-size: 2.313em;
  }
`

export const CopyText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 1.625em;
  line-height: 2.154em;
  letter-spacing: ${convertTrackingToEm(230)};
  ${sm} {
    line-height: 1.838em;
    font-size: 2.313em;
  }
`

export const CopySmallText = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  line-height: 1.838em;
  letter-spacing: ${convertTrackingToEm(230)};
  ${sm} {
    font-size: 0.875em;
  }
`

export const PlainText = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.875em;
  letter-spacing: ${convertTrackingToEm(15)};
  line-height: 1.75em;
  ${sm} {
    line-height: 1.875em;
    font-size: 0.938em;
  }
`
