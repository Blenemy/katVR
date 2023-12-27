import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from '../StoreProvider'

import './styles/_reset.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'katVR',
  description: 'Generated by create next app'
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <StoreProvider>
      <html lang={params.lang || 'en'}>
        <body id="body" className={inter.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
