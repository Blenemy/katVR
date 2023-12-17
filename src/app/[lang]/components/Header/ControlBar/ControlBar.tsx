'use client'

import { Translations } from '@/app/[lang]/types/Translations'
import { MoreButton } from './MoreButton/MoreButton'
import { Modal } from '../../Modal/Modal'
import { FAQComponent } from '../../FAQ/FAQComponent'

import './ControlBar.scss'
import { useState } from 'react'

interface ControlBarProps {
  t: Translations
}

export const ControlBar: React.FC<ControlBarProps> = ({ t }) => {
  const [isActiveModal, setActiveModal] = useState<boolean>(false)

  const handleToggleModal = () => {
    setActiveModal(false)
  }

  const handleOpenModal = () => {
    setActiveModal(true)
  }

  return (
    <>
      <section className="header__control-bar control-bar">
        <article className="control-bar__left">
          <p className="control-bar__FAQ" onClick={handleOpenModal}>
            {t['control-bar'].faq}
          </p>
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
      {isActiveModal && (
        <Modal isActive={isActiveModal} handleToggleModal={handleToggleModal}>
          <FAQComponent t={t} isDesktop />
        </Modal>
      )}
    </>
  )
}
