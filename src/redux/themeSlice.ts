import { createSlice } from '@reduxjs/toolkit'
import { DARK_THEME, LIGHT_THEME } from '../design/colors'

export interface IColors {
  primary: string
  secondary: string
  tertiary: string
  shadow: string
  gray: string
  light: string
  dark: string
}

export interface IColorsState {
  theme: IColors
  isDarkTheme: boolean
}

const initialState: IColorsState = {
  theme: LIGHT_THEME,
  isDarkTheme: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.isDarkTheme ? LIGHT_THEME : DARK_THEME
      state.isDarkTheme = !state.isDarkTheme
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
