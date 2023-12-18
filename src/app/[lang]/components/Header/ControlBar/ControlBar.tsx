'use client'

import { Translations } from '@/app/[lang]/types/Translations'
import { MoreButton } from './MoreButton/MoreButton'
import { Modal } from '../../Modal/Modal'

import './ControlBar.scss'
import { useCallback, useState } from 'react'
import { FAQComponent } from '../../FAQ/FAQComponent'
import { HelpNavbar } from '../Navbar/HelpNavbar/HelpNavbar'

interface ControlBarProps {
  t: Translations
}

export const ControlBar: React.FC<ControlBarProps> = ({ t }) => {
  const [isActiveModal, setActiveModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)

  const handleSwitchNavigationBar = useCallback(() => {
    setModalContent(<FAQComponent t={t} isDesktop />)
  }, [t])

  const handleToggleModal = useCallback(() => {
    setActiveModal((prev) => !prev)
  }, [])

  const handleFAQClick = useCallback(() => {
    setModalContent(<FAQComponent t={t} isDesktop />)
    handleToggleModal()
  }, [t, handleToggleModal])

  const handleHelpClick = useCallback(() => {
    setModalContent(
      <HelpNavbar
        t={t}
        isDesktop
        handleSwitchNavigationBar={handleSwitchNavigationBar}
        handleOnClick={handleToggleModal}
      />
    )
    handleToggleModal()
  }, [t, handleToggleModal, handleSwitchNavigationBar])

  return (
    <>
      <section className="header__control-bar control-bar">
        <article className="control-bar__left">
          <p className="control-bar__FAQ" onClick={handleFAQClick}>
            {t['control-bar'].faq}
          </p>
          <p className="control-bar__help" onClick={handleHelpClick}>
            {t['control-bar'].help}
          </p>
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
          {modalContent}
        </Modal>
      )}
    </>
  )
}
