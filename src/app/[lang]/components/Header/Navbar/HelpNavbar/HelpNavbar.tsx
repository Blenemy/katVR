import Image from 'next/image'

import { Translations } from '@/app/[lang]/types/Translations'

import backImage from '../../../../../../../public/icons/arrow-back.svg'
import { TextDecorator } from '../../../TextDecorator/TextDecorator'

interface HelpNavbarProps {
  t: Translations
  handleOnClick: () => void
  handleSwitchNavigationBar: () => void
  isDesktop?: boolean
}

export const HelpNavbar: React.FC<HelpNavbarProps> = ({
  handleOnClick,
  handleSwitchNavigationBar,
  t,
  isDesktop = false
}) => {
  return (
    <>
      {!isDesktop && (
        <Image
          src={backImage}
          alt="burgerImage"
          className="menu__close menu__close_back"
          onClick={handleOnClick}
        />
      )}

      <h4 className="menu__title">
        {`${t.help.title[0]} `}
        <TextDecorator>{t.navbar.help}</TextDecorator> {` ${t.help.title[1]}`}
      </h4>

      <section className="menu__body-text">
        <article className="menu__text">
          {`${t.help.intro} `}
          <TextDecorator onClick={handleSwitchNavigationBar}>
            {t.navbar.faq}
          </TextDecorator>
        </article>
        <article className="menu__text">
          {`${t.help.contactMessage[0]} `}
          <TextDecorator>{t.navbar.contact}</TextDecorator>{' '}
          {` ${t.help.contactMessage[1]}`}
        </article>
      </section>

      <div className="menu__credentials">
        <section className="menu__support">
          <article className="menu__support-link">
            {t.help.supportLinks[0]}
          </article>
          <article className="menu__support-link">
            {t.help.supportLinks[1]}
          </article>
          <article className="menu__support-link">
            {t.help.supportLinks[2]}
          </article>
        </section>

        <section className="menu__contacts">
          <article className="menu__contact">{t.help.contacts[0]}</article>
          <article className="menu__contact">{t.help.contacts[1]}</article>
          <article className="menu__contact">{t.help.contacts[2]}</article>
        </section>
      </div>
    </>
  )
}
