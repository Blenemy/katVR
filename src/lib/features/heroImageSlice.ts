import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import mainImage_2x from '../../../public/icons/header-main_2x.png'
import headphones_2x from '../../../public/icons/headphones-2x.png'
import { StaticImageData } from 'next/image'

interface HeroImageState {
  images: StaticImageData[]
  currentImage: number
}

const initialState: HeroImageState = {
  images: [mainImage_2x, headphones_2x],
  currentImage: 0
}

const heroImageSlice = createSlice({
  name: 'heroImage',
  initialState,
  reducers: {
    switchImage: (state, action: PayloadAction<number>) => {
      state.currentImage = action.payload
    },
    nextImage: (state) => {
      const nextIndex = state.currentImage + 1
      state.currentImage = nextIndex % state.images.length
    },
    previousImage: (state) => {
      const previousIndex = state.currentImage - 1
      state.currentImage =
        previousIndex >= 0 ? previousIndex : state.images.length - 1
    }
  }
})

export const { switchImage, nextImage, previousImage } = heroImageSlice.actions
export default heroImageSlice.reducer
