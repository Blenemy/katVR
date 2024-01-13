import Image from 'next/image'

import logo from '../../../../../../public/icons/Logo.svg'
import { LanguageDropdown } from '@/app/[lang]/homepage/Hero/LanguageDropdown/LanguageDropdown'

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
