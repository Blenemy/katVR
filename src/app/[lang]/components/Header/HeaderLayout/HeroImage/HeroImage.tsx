'use client'

import Image from 'next/image'

import { useAppSelector } from '@/lib/hooks'

export const HeroImage = () => {
  const { currentImage, images } = useAppSelector(
    (state) => state.heroImageSlice
  )

  return (
    <div className="_img-container header__hero hero">
      <Image src={images[currentImage]} alt="hero" className="hero__img" />
    </div>
  )
}
