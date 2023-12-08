'use client'

import Image from 'next/image'
import logo from '../../../../public/icons/Logo.svg'
import burgerImage from '../../../../public/icons/burger.svg'
import crossImage from '../../../../public/icons/cross-white.svg'
import mainImage from './images/header-main.png'
import { Button } from '../Button/Button'
import { TextDecorator } from '../TextDecorator/TextDecorator'
import './Header.scss'
import { PlayVideo } from '../PlayVideo/PlayVideo'
import { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpenNavbar = () => {
    setIsOpened((prev) => !prev)
  }

  return (
    <>
      <section className="header">
        <div className="header__content">
          <header className="header__navbar">
            <div className="header__logo">
              <Image src={logo} alt="katVR_logo" className="header__img" />
            </div>
            <div className="header__logo">
              <Image
                src={isOpened ? crossImage : burgerImage}
                alt="burgerImage"
                className="header__img"
                onClick={handleOpenNavbar}
              />
            </div>
          </header>
          <section className="header__hero hero">
            <Image src={mainImage} alt="hero" className="hero__img" />
          </section>
          <section className="header__main-content">
            <h1 className="header__title">
              THE NEW START OF <TextDecorator>VR LOCOMOTION</TextDecorator>
            </h1>
            <p className="header__subtitle">
              Discover the most comprehensive VR Locomotion system, and unlock
              infinite motion in any games on any platforms!
            </p>
            <p className="header__price">1200$</p>
            <PlayVideo classname="header__video-play" />
            <Button type="button" text="Buy Now" classname="header__button" />
          </section>
        </div>
      </section>
      <Navbar handleOpenNavbar={handleOpenNavbar} isOpened={isOpened} />
    </>
  )
}
