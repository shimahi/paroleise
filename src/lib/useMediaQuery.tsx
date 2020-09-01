import { useMedia } from 'react-use'
import { useIsClient } from 'lib/useIsClient'

export const useIsXSmall = () => {
  const isClient = useIsClient()

  const isXSmall = useMedia('(max-width: 575.98px)')

  // サーバーサイドで実行されないようにする
  if (!isClient) return false

  return isXSmall
}

export const useIsMedium = () => {
  const isClient = useIsClient()

  const isMedium = useMedia('(min-width: 767.98px)')

  // サーバーサイドで実行されないようにする
  if (!isClient) return false

  return isMedium
}

export const useIsLarge = () => {
  const isClient = useIsClient()
  const isLarge = useMedia('(min-width: 991.98px)')

  if (!isClient) return false

  return isLarge
}
