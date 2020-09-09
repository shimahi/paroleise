import Link from 'next/link'
import { SerializedStyles } from '@emotion/core'
import { StyledComponent } from '@emotion/styled'

type Link = {
  name: string
  href: string
  isOuter?: boolean
}

type LinkListProps = {
  linkList: Link[]
  Component: StyledComponent<any, any, any>
  cssProps?: SerializedStyles
}

export const LinkList = ({ linkList, Component, cssProps }: LinkListProps) => {
  return (
    <ul css={cssProps}>
      {linkList.map(({ href, name, isOuter = false }, index) => (
        <li key={index}>
          {isOuter ? (
            <Component href={href} target="_blank" rel="noopener">
              {name}
            </Component>
          ) : (
            <Link href={href}>
              <Component>{name}</Component>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
