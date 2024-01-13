'use client'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import cn from 'classnames'
import { toggleNavbar } from '@/lib/features/navbarSlice'
import { Translations } from '@/app/[lang]/types/Translations'

import { NavbarContentKey } from '@/app/[lang]/types/NavigationTypes'
import { DefaultMenu } from './DefaultMenu/DefaultMenu'
import { LangaugeMenu } from './LanguageMenu/LanguageMenu'
import { HelpMenu } from './HelpMenu/HelpMenu'

import './NavigationMenu.scss'
import { FAQComponent } from '@/app/[lang]/components/FAQ/FAQComponent'

interface NavigationMenuProps {
  t: Translations
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ t }) => {
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
      <DefaultMenu
        t={t}
        handleOnClick={handleNavbar}
        handleLanguageClick={switchNavbarContent('language')}
        handleHelpClick={switchNavbarContent('help')}
        handleFAQClick={switchNavbarContent('faq')}
      />
    ),
    language: (
      <LangaugeMenu t={t} handleOnClick={switchNavbarContent('default')} />
    ),
    help: (
      <HelpMenu
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
