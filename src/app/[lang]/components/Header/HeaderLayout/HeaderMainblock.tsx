import { TextDecorator } from '../../TextDecorator/TextDecorator'
import { PlayVideo } from '../../PlayVideo/PlayVideo'
import { Button } from '../../Button/Button'

import { Translations } from '@/app/[lang]/types/Translations'
import { HeroImage } from './HeroImage/HeroImage'

export const HeaderMainblock = ({ t }: { t: Translations }) => {
  return (
    <section className="header__main-block main-block-header">
      <article className="header__hero main-block-header__article main-block-header__article_image">
        <HeroImage />
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
  )
}
