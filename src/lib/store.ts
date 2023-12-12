import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './features/navbarSlice'
import languageSlice from './features/languageSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbar: navbarSlice,
      language: languageSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
