import styled from '@emotion/styled'
import { sm, convertTrackingToEm } from 'style'
import { css } from '@emotion/core'

type TextProps = {
  family?: string
  weight?: number
  size?: number
  pcSize?: number
  tracking?: number
  height?: number
  as?: string
}

const base = ({ family, weight, tracking, height, size, pcSize }: TextProps) => css`
  font-family: ${family};
  font-weight: ${weight};
  letter-spacing: ${convertTrackingToEm(tracking)};
  line-height: ${`${height}em`};
  font-size: ${`${size}em`};
  ${sm} {
    font-size: ${`${pcSize}em`};
  }
`

export const H1 = styled.h1`
  ${base};
`
H1.defaultProps = {
  weight: 500,
  size: 1.625,
  pcSize: 2.313,
  family: "'Fira Sans', sans-serif;",
  tracking: 230,
  height: 1.838,
}

export const H2 = styled.h2`
  ${base};
`

H2.defaultProps = {
  weight: 300,
  size: 1.625,
  pcSize: 2.313,
  family: "'Fira Sans', sans-serif;",
  height: 2.154,
  tracking: 230,
}

export const Small = styled.small`
  ${base}
`
Small.defaultProps = {
  weight: 300,
  size: 0.875,
  family: "'Fira Sans', sans-serif;",
  height: 1.838,
  tracking: 230,
}

export const Text = styled.p`
  ${base}
`
Text.defaultProps = {
  weight: 300,
  family: "'Fira Sans', sans-serif;",
  tracking: 150,
}
