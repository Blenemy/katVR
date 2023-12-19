import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './features/navbarSlice'
import heroImageSlice from './features/heroImageSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbar: navbarSlice,
      heroImageSlice: heroImageSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
