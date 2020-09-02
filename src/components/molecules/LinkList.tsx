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
  Typography: StyledComponent<any, any, any>
  cssProps?: SerializedStyles
}

export const LinkList = ({ linkList, Typography, cssProps }: LinkListProps) => {
  return (
    <ul css={cssProps}>
      {linkList.map(({ href, name, isOuter = false }, index) => (
        <li key={index}>
          {isOuter ? (
            <Typography href={href} target="_blank" rel="noopener">
              {name}
            </Typography>
          ) : (
            <Link href={href}>
              <Typography>{name}</Typography>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
