import Image from 'next/image'

import { Button } from '../Button/Button'
import { TextDecorator } from '../TextDecorator/TextDecorator'
import { PlayVideo } from '../PlayVideo/PlayVideo'
// import { Navbar } from '../Navbar/Navbar'
import { ControlBar } from './ControlBar/ControlBar'
import { LanguageDropdown } from './LanguageDropdown/LanguageDropdown'
import { Container } from '../Container/Container'

import logo from '../../../../../public/icons/Logo.svg'
import burgerImage from '../../../../../public/icons/burger.svg'
// import crossImage from '../../../../../public/icons/cross-white.svg'
import mainImage_2x from './images/header-main_2x.png'

import './Header.scss'
import { BurgerIcon } from './BurgerIcon/BurgerIcon'

interface HeaderProps {
  t: any
}

export const Header: React.FC<HeaderProps> = ({ t }) => {
  const handleOpenNavbar = async () => {
    'use server'
    console.log(123)
  }

  return (
    <>
      <header className="header">
        <Container>
          <div className="header__content">
            <section className="header__navbar">
              <div className="header__left">
                <div className="header__logo">
                  <Image src={logo} alt="katVR_logo" className="header__img" />
                </div>
                <LanguageDropdown />
              </div>
              <div className="header__right">
                <BurgerIcon
                  src={burgerImage}
                  handleOpenNavbar={handleOpenNavbar}
                />
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
            <section className="header__main-block main-block-header">
              <article className="header__hero main-block-header__article main-block-header__article_image">
                <div className="_img-container header__hero hero">
                  <Image src={mainImage_2x} alt="hero" className="hero__img" />
                </div>
              </article>
              <article className="header__main-content main-block-header__article main-block-header__article_content">
                <h1 className="header__title">
                  {t.header.title}{' '}
                  <TextDecorator>{t.header.textDecorator}</TextDecorator>
                </h1>
                <section className="header__text-wrapper">
                  <p className="header__subtitle">{t.header.subtitle}</p>
                  <p className="header__price">{t.header.price}</p>
                  <PlayVideo classname="header__video-play" />
                </section>

                <Button
                  type="button"
                  text={t.header.button}
                  classname="header__button header__button_down"
                />
              </article>
            </section>
            <ControlBar />
          </div>
        </Container>
      </header>
      {/* <Navbar handleOpenNavbar={handleOpenNavbar} isOpened={isOpened} /> */}
    </>
  )
}
