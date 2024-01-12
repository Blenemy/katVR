'use client'

import Image from 'next/image'

import logo from '../../../../../../public/icons/Logo.svg'
import cross from '../../../../../../public/icons/cross-white.svg'

import { useParams, useRouter } from 'next/navigation'

import './PurchaseHeader.scss'

export const PurchaseHeader = () => {
  const router = useRouter()
  const params = useParams()

  const backToHome = () => {
    const lang = params.lang
    router.push(`/${lang}`)
  }

  return (
    <header className="purchase__header header-purchase">
      <div className="header-purchase__logo">
        <Image
          src={logo}
          alt="katVR_logo"
          className="header-purchase__img"
          onClick={backToHome}
        />
      </div>
      <div className="header-purchase__logo">
        <Image src={cross} alt="cross" className="header-purchase__logo" />
      </div>
    </header>
  )
}
