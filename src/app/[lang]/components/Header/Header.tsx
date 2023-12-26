import Image from 'next/image'
import { LanguageDropdown } from '../Hero/LanguageDropdown/LanguageDropdown'
import { BurgerIcon } from '../Hero/BurgerIcon/BurgerIcon'
import { Button } from '../Button/Button'
import { Translations } from '@/app/[lang]/types/Translations'

import logo from '../../../../../public/icons/Logo.svg'

import './Header.scss'

export const Header = ({ t }: { t: Translations }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <Image src={logo} alt="katVR_logo" className="header__img" />
        </div>
        <LanguageDropdown />
      </div>
      <div className="header__right">
        <BurgerIcon />
        <div className="header__navigation-line">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__link">{t.navbar.about}</a>
            </li>
            <li className="header__item">
              <a className="header__link">{t.navbar.tech}</a>
            </li>
            <li className="header__item">
              <a className="header__link">{t.navbar.benefits}</a>
            </li>
            <li className="header__item">
              <a className="header__link">{t.navbar.contact}</a>
            </li>
          </ul>
          <Button
            type="button"
            text={t.hero.button}
            classname="header__button header__button_nav"
          />
        </div>
      </div>
    </header>
  )
}
