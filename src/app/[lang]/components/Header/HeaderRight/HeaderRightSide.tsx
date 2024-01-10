'use client'

import { Translations } from '@/app/[lang]/types/Translations'
import { Button } from '../../Button/Button'
import { BurgerIcon } from '../../Hero/BurgerIcon/BurgerIcon'
import { useRouter, usePathname } from 'next/navigation'

export const HeaderRightSide = ({ t }: { t: Translations }) => {
  const router = useRouter()
  const pathname = usePathname()

  const GoToPurchasePage = () => {
    router.push(`${pathname}/purchase?step=1`)
  }

  return (
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
          onClick={GoToPurchasePage}
        />
      </div>
    </div>
  )
}
