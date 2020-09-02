import styled from '@emotion/styled'
import { sm, convertTrackingToEm } from 'style'

// All text assets are written here.

export const PlainText = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.75em;
  letter-spacing: ${convertTrackingToEm(15)};
  ${sm} {
    line-height: 1.875em;
    font-size: 0.938em;
  }
`

export const CopyTitleText = styled.h1`
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
  font-size: 0.875em;
  line-height: 1.838em;
  letter-spacing: ${convertTrackingToEm(230)};
`

export const HeaderLinkText = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.9375em;
  letter-spacing: ${convertTrackingToEm(150)};
`

export const SideNavigationInnerLinkText = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 1.125em;
  letter-spacing: ${convertTrackingToEm(200)};
`

export const SideNavigationOuterLinkText = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 0.875em;
  letter-spacing: ${convertTrackingToEm(100)};
`
