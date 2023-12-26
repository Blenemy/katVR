import { Translations } from '@/app/[lang]/types/Translations'

import './Header.scss'
import { HeaderLeftSide } from './HeaderLeft/HeaderLeftSide'
import { HeaderRightSide } from './HeaderRight/HeaderRightSide'

export const Header = ({ t }: { t: Translations }) => {
  return (
    <header className="header">
      <HeaderLeftSide />
      <HeaderRightSide t={t} />
    </header>
  )
}
