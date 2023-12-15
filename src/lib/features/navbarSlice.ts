import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavbarState {
  isOpened: boolean
}

const initialState: NavbarState = {
  isOpened: false
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload
      if (action.payload) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  }
})

export const { toggleNavbar } = navbarSlice.actions
export default navbarSlice.reducer
