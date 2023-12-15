'use client'

import { useState } from 'react'
import cn from 'classnames'
import './Navbar.scss'
import { toggleNavbar } from '@/lib/features/navbarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Translations } from '../../types/Translations'
import { DefaultNavbar } from './DefaultNavbar/DefaultNavbar'
import { LanguageNavbar } from './LanguageNavbar/LanguageNavbar'
import { HelpNavbar } from './HelpNavbar/HelpNavbar'

interface NavbarProps {
  t: Translations
}

type NavbarContentKey = 'default' | 'language' | 'help'

export const Navbar: React.FC<NavbarProps> = ({ t }) => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector((state) => state.navbar)
  const [navbarContent, setNavbarContent] =
    useState<NavbarContentKey>('default')

  const switchNavbarContent = (contentKey: NavbarContentKey) => {
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
        handleLanguageClick={() => switchNavbarContent('language')}
        handleHelpClick={() => switchNavbarContent('help')}
      />
    ),
    language: (
      <LanguageNavbar
        t={t}
        handleOnClick={() => switchNavbarContent('default')}
      />
    ),
    help: (
      <HelpNavbar t={t} handleOnClick={() => switchNavbarContent('default')} />
    )
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
