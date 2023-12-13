import { Translations } from '@/app/[lang]/types/Translations'
import './ControlBar.scss'
import { MoreButton } from './MoreButton/MoreButton'
import { Modal } from '../../Modal/Modal'
import { FAQComponent } from '../../FAQ/FAQComponent '

interface ControlBarProps {
  t: Translations
}

export const ControlBar: React.FC<ControlBarProps> = ({ t }) => {
  return (
    <>
      <section className="header__control-bar control-bar">
        <article className="control-bar__left">
          <p className="control-bar__FAQ">{t['control-bar'].faq}</p>
          <p className="control-bar__help">{t['control-bar'].help}</p>
        </article>
        <MoreButton
          classes="control-bar__center"
          text={t['control-bar']['more-btn']}
        />
        <article className="control-bar__right">
          <p className="control-bar__previous">{t['control-bar'].previous}</p>
          <p className="control-bar__next">{t['control-bar'].next}</p>
        </article>
      </section>
      <Modal isActive={true}>
        <FAQComponent />
      </Modal>
    </>
  )
}
