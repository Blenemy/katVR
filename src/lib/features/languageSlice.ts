import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
  language: string
}

const initialState: LanguageState = {
  language: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const { switchLanguage } = languageSlice.actions
export default languageSlice.reducer
