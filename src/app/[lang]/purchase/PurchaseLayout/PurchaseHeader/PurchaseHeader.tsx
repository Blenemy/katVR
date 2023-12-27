import Image from 'next/image'

import logo from '../../../../../../public/icons/Logo.svg'
import cross from '../../../../../../public/icons/cross-white.svg'

import './PurchaseHeader.scss'

export const PurchaseHeader = () => {
  return (
    <header className="purchase__header header-purchase">
      <div className="header-purchase__logo">
        <Image src={logo} alt="katVR_logo" className="header-purchase__img" />
      </div>
      <div className="header-purchase__logo">
        <Image src={cross} alt="cross" className="header-purchase__logo" />
      </div>
    </header>
  )
}
