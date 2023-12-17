'use client'

import { useState } from 'react'
import cn from 'classnames'
import './Navbar.scss'
import { toggleNavbar } from '@/lib/features/navbarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { DefaultNavbar } from './DefaultNavbar/DefaultNavbar'
import { LanguageNavbar } from './LanguageNavbar/LanguageNavbar'
import { HelpNavbar } from './HelpNavbar/HelpNavbar'
import { Translations } from '@/app/[lang]/types/Translations'
import { FAQComponent } from '../../FAQ/FAQComponent'
import { NavbarContentKey } from '@/app/[lang]/types/NavigationTypes'

interface NavbarProps {
  t: Translations
}

export const Navbar: React.FC<NavbarProps> = ({ t }) => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector((state) => state.navbar)
  const [navbarContent, setNavbarContent] =
    useState<NavbarContentKey>('default')

  const switchNavbarContent = (contentKey: NavbarContentKey) => () => {
    setNavbarContent(contentKey)
  }

  const handleNavbar = () => {
    dispatch(toggleNavbar(!isOpened))
    if (isOpened) {
      setNavbarContent('default')
    }
  }

  const navbarComponents: Record<NavbarContentKey, JSX.Element> = {
    default: (
      <DefaultNavbar
        t={t}
        handleOnClick={handleNavbar}
        handleLanguageClick={switchNavbarContent('language')}
        handleHelpClick={switchNavbarContent('help')}
        handleFAQClick={switchNavbarContent('faq')}
      />
    ),
    language: (
      <LanguageNavbar t={t} handleOnClick={switchNavbarContent('default')} />
    ),
    help: (
      <HelpNavbar
        t={t}
        handleOnClick={switchNavbarContent('default')}
        handleSwitchNavigationBar={switchNavbarContent('faq')}
      />
    ),
    faq: <FAQComponent t={t} handleOnClick={switchNavbarContent('default')} />
  }

  return (
    <nav
      className={cn('page__menu menu', { 'menu-active': isOpened })}
      id="menu"
    >
      <div className="container">
        <div className="menu__content">{navbarComponents[navbarContent]}</div>
      </div>
    </nav>
  )
}
