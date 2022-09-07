import { createSlice } from '@reduxjs/toolkit'
import { DARK_COLORS, LIGHT_COLORS } from '../design/colors'

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
  isDarkMode: boolean
}

const initialState: IColorsState = {
  theme: LIGHT_COLORS,
  isDarkMode: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.isDarkMode ? LIGHT_COLORS : DARK_COLORS
      state.isDarkMode = !state.isDarkMode
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
