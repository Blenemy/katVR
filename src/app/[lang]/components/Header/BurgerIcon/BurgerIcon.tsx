'use client'

import { toggleNavbar } from '@/lib/features/navbarSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'

import burgerImage from '../../../../../../public/icons/burger.svg'
import cross from '../../../../../../public/icons/cross-white.svg'

export const BurgerIcon: React.FC = () => {
  const { isOpened } = useAppSelector((state) => state.navbar)
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(toggleNavbar(!isOpened))
  }

  return (
    <div className="header__logo header__logo_navbar">
      <Image
        alt="burgerImage"
        className="header__img"
        onClick={handleOnClick}
        src={isOpened ? cross : burgerImage}
      />
    </div>
  )
}
