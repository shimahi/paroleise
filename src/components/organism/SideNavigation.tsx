import { css } from '@emotion/core'
import { useIsXSmall } from 'lib/useMediaQuery'
import { SideNavigationInnerLinkText, SideNavigationOuterLinkText } from 'components/atoms/Typography'
import { LinkList } from 'components/molecules/LinkList'

export const SideNavigation = () => {
  const isXSmall = useIsXSmall()
  const innerLinkList = [
    {
      name: 'ABOUT',
      href: '/about',
    },
    {
      name: 'NEWS',
      href: '/news',
    },
    {
      name: 'WORKS',
      href: '/works',
    },
  ]

  const outerLinkList = [
    {
      name: 'web shop',
      href: 'https://paroleise.booth.pm/',
      isOuter: true,
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/paroleise',
      isOuter: true,
    },
  ]

  if (isXSmall) return null

  return (
    <aside css={sideNavigation}>
      <LinkList linkList={innerLinkList} Typography={SideNavigationInnerLinkText} cssProps={sideNavigation__inner} />

      <LinkList linkList={outerLinkList} Typography={SideNavigationOuterLinkText} cssProps={sideNavigation__outer} />
    </aside>
  )
}

const sideNavigation = css`
  position: fixed;
  bottom: 48px;
  z-index: 1;
  right: 40px;
  & > ul:first-of-type {
    margin-bottom: 40px;
  }
`

const sideNavigation__inner = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > li:not(:first-of-type) {
    margin-top: 16px;
  }
`

const sideNavigation__outer = css`
  ${sideNavigation__inner}
  & > li:not(:first-of-type) {
    margin-top: 8px;
  }
`
