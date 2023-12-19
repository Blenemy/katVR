import Image from 'next/image'

import logo from '../../../../../../public/icons/Logo.svg'
import cross from '../../../../../../public/icons/cross-white.svg'

export const PurchaseHeader = () => {
  return (
    <header className="purchase__header">
      <div className="purchase__logo">
        <Image src={logo} alt="katVR_logo" className="purchase__img" />
      </div>
      <div className="purchase__logo">
        <Image src={cross} alt="cross" className="purchase__img" />
      </div>
    </header>
  )
}
