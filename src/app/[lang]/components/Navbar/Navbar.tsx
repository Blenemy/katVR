'use client'

import cn from 'classnames'
import Image from 'next/image'

import cross from '../../../../../public/icons/cross-white.svg'

import './Navbar.scss'
import { toggleNavbar } from '@/lib/features/navbarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Translations } from '../../types/Translations'

interface NavbarProps {
  t: Translations
}

export const Navbar: React.FC<NavbarProps> = ({ t }) => {
  const { isOpened } = useAppSelector((state) => state.navbar)
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(toggleNavbar(!isOpened))
  }

  return (
    <nav
      className={cn('page__menu menu', { 'menu-active': isOpened })}
      id="menu"
    >
      <div className="container">
        <div className="menu__content">
          <Image
            src={cross}
            alt="burgerImage"
            className="menu__close"
            onClick={handleOnClick}
          />
          <ul className="menu__list">
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.about}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.tech}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.benefits}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.contact}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.language}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.faq}
              </a>
            </li>
            <li className="menu__item">
              <a href={'/'} className="menu__link">
                {t.navbar.help}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
