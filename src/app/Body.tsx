'use client'

import { useAppSelector } from '@/lib/hooks'
import cn from 'classnames'
import { Inter } from 'next/font/google'

interface BodyProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const Body: React.FC<BodyProps> = ({ children }) => {
  const { isOpened } = useAppSelector((state) => state.navbar)

  return (
    <body
      className={cn(`${inter.className} page`, {
        'page__body--with-menu': isOpened
      })}
    >
      {children}
    </body>
  )
}
