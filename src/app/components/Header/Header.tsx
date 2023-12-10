import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useTranslation } from 'react-i18next'
import { toggleNavbar } from '@/lib/features/navbarSlice'

import { Button } from '../Button/Button'
import { TextDecorator } from '../TextDecorator/TextDecorator'
import { PlayVideo } from '../PlayVideo/PlayVideo'
import { Navbar } from '../Navbar/Navbar'
import { ControlBar } from './ControlBar/ControlBar'
import { LanguageDropdown } from './LanguageDropdown/LanguageDropdown'
import { Container } from '../Container/Container'

import logo from '../../../../public/icons/Logo.svg'
import burgerImage from '../../../../public/icons/burger.svg'
import crossImage from '../../../../public/icons/cross-white.svg'
import mainImage_2x from './images/header-main_2x.png'

import './Header.scss'
import { useEffect } from 'react'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector((state) => state.navbar)
  const { t } = useTranslation()

  const handleOpenNavbar = () => {
    dispatch(toggleNavbar(!isOpened))
  }

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add('page__body--with-menu')
    } else {
      document.body.classList.remove('page__body--with-menu')
    }
  }, [isOpened])

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
                <div className="header__logo header__logo_navbar">
                  <Image
                    src={isOpened ? crossImage : burgerImage}
                    alt="burgerImage"
                    className="header__img"
                    onClick={handleOpenNavbar}
                  />
                </div>
                <div className="header__navigation-line">
                  <ul className="header__list">
                    <li className="header__item">
                      <a className="header__link">{t('navbar.navbar.about')}</a>
                    </li>
                    <li className="header__item">
                      <a className="header__link">{t('navbar.navbar.tech')}</a>
                    </li>
                    <li className="header__item">
                      <a className="header__link">
                        {t('navbar.navbar.benefits')}
                      </a>
                    </li>
                    <li className="header__item">
                      <a className="header__link">
                        {t('navbar.navbar.contact')}
                      </a>
                    </li>
                  </ul>
                  <Button
                    type="button"
                    text={t('header.button', 'Buy Now')}
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
                  {t('header.title', 'THE NEW START OF VR LOCOMOTION')}{' '}
                  <TextDecorator>
                    {t('header.textDecorator', 'VR LOCOMOTION')}
                  </TextDecorator>
                </h1>
                <section className="header__text-wrapper">
                  <p className="header__subtitle">
                    {t(
                      'header.subtitle',
                      'Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!'
                    )}
                  </p>
                  <p className="header__price">{t('header.price', '1200$')}</p>
                  <PlayVideo classname="header__video-play" />
                </section>

                <Button
                  type="button"
                  text={t('header.button', 'Buy Now')}
                  classname="header__button header__button_down"
                />
              </article>
            </section>
            <ControlBar />
          </div>
        </Container>
      </header>
      <Navbar handleOpenNavbar={handleOpenNavbar} isOpened={isOpened} />
    </>
  )
}
