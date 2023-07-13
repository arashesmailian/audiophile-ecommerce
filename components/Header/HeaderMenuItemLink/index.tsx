import {ReactNode, MouseEvent} from 'react'
import {useRouter, usePathname} from 'next/navigation'

type Props = {
  href: string
  children: ReactNode
}

const HeaderMenuItemLink = ({href, children}: Props) => {
  const router = useRouter()
  const pathName = usePathname()
  const isCurrentPath = pathName === href
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: 'none',
          margin: '0',
          padding: '0',
          color: isCurrentPath
            ? 'var(--color-pry-100)'
            : 'var(--color-pry-300)',
        }}
      >
        {children}
      </a>
    </>
  )
}

export default HeaderMenuItemLink
