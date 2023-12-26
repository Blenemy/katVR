import Image from 'next/image'
import { LanguageDropdown } from '../../Hero/LanguageDropdown/LanguageDropdown'

import logo from '../../../../../../public/icons/Logo.svg'

export const HeaderLeftSide = () => {
  return (
    <div className="header__left">
      <div className="header__logo">
        <Image src={logo} alt="katVR_logo" className="header__img" />
      </div>
      <LanguageDropdown />
    </div>
  )
}
