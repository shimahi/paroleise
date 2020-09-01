import { css } from '@emotion/core'

export const xxxs = `@media (max-width: 374.98px)`
export const xxs = `@media (max-width: 413.98px)`
export const xs = `@media (max-width: 575.98px)`
export const sm = `@media (min-width: 575.98px)`
export const md = `@media (min-width: 767.98px)`
export const lg = `@media (min-width: 991.98px)`
export const xl = `@media (min-width: 1199.98px)`
export const xxl = `@media (min-width: 1599.98px)`

// color
const white = '#fff'
// const lightGray = '#F8F8F8'
// const gray = '#EDF0F2'
const blue = '#00437E'
const lightblue = '#EDF0F2'
export const textColor = blue
export const baseColor = lightblue
export const canvasColor = white

// lib

export const convertTrackingToEm = (tracking: number) => {
  return `${tracking / 1000}em`
}

export const fixAspectRatio = (x: number, y: number) => css`
  &:before {
    content: '';
    display: block;
    padding-top: calc((${x} / ${y} * 100%));
  }
`

export const applyChildGridArea = (count: number) => {
  const array = [...Array(count)].map((_, i) => i + 1)

  return array.map((n) => {
    const area = `area_${n}`

    return css`
      & > *:nth-of-type(${String(n)}) {
        grid-area: ${area};
      }
    `
  })
}
