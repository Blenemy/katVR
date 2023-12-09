import Image from 'next/image'
import { Button } from '../Button/Button'
import { TextDecorator } from '../TextDecorator/TextDecorator'
import { PlayVideo } from '../PlayVideo/PlayVideo'
import { Navbar } from '../Navbar/Navbar'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { toggleNavbar } from '@/lib/features/navbarSlice'
import { useTranslation } from 'react-i18next'
import logo from '../../../../public/icons/Logo.svg'
import burgerImage from '../../../../public/icons/burger.svg'
import crossImage from '../../../../public/icons/cross-white.svg'
import mainImage_2x from './images/header-main_2x.png'
import './Header.scss'
import { useMedia } from '@/app/hooks/useMedia'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector((state) => state.navbar)
  const { t } = useTranslation()
  const { isMobile } = useMedia()

  const handleOpenNavbar = () => {
    dispatch(toggleNavbar(!isOpened))
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
              <p className="header__subtitle">
                {t(
                  'header.subtitle',
                  'Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!'
                )}
              </p>
              <p className="header__price">{t('header.price', '1200$')}</p>
              <PlayVideo classname="header__video-play" />
              {isMobile && (
                <Button
                  type="button"
                  text={t('header.button', 'Buy Now')}
                  classname="header__button"
                />
              )}
            </article>
          </section>
        </div>
      </section>
      <Navbar handleOpenNavbar={handleOpenNavbar} isOpened={isOpened} />
    </>
  )
}
