import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from './features/navbarSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbar: navbarSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
