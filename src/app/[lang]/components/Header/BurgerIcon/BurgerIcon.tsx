'use client'

import Image from 'next/image'

interface BurgerIconProps {
  src: string
  handleOpenNavbar: () => void
}

export const BurgerIcon: React.FC<BurgerIconProps> = ({
  src,
  handleOpenNavbar
}) => {
  return (
    <div className="header__logo header__logo_navbar">
      <Image
        src={src}
        alt="burgerImage"
        className="header__img"
        onClick={handleOpenNavbar}
      />
    </div>
  )
}
