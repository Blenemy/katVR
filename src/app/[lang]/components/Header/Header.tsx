import { Translations } from '@/app/[lang]/types/Translations'

import { HeaderLeftSide } from './HeaderLeft/HeaderLeftSide'
import { HeaderRightSide } from './HeaderRight/HeaderRightSide'

import './Header.scss'

export const Header = ({ t }: { t: Translations }) => {
  return (
    <header className="header">
      <HeaderLeftSide />
      <HeaderRightSide t={t} />
    </header>
  )
}
