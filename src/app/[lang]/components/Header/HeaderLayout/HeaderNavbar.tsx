import Image from 'next/image'
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown'
import { BurgerIcon } from '../BurgerIcon/BurgerIcon'
import { Button } from '../../Button/Button'
import { Translations } from '@/app/[lang]/types/Translations'

import logo from '../../../../../../public/icons/Logo.svg'

export const HeaderNavbar = ({ t }: { t: Translations }) => {
  return (
    <section className="header__navbar">
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
            text={t.header.button}
            classname="header__button header__button_nav"
          />
        </div>
      </div>
    </section>
  )
}
