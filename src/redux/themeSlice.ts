import { createSlice } from '@reduxjs/toolkit'
import { DARK_COLORS, LIGHT_COLORS } from '../design/colors'

export interface IColors {
  primary: string
  secondary: string
  tertiary: string
  shadow: string
  gray: string
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
      state.isDarkMode = !state.isDarkMode
      state.theme = state.isDarkMode ? LIGHT_COLORS : DARK_COLORS
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
