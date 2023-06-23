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
  activeItem: string
}

const initialState: IColorsState = {
  theme: LIGHT_THEME,
  isDarkTheme: false,
  activeItem: 'danpops'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.isDarkTheme ? LIGHT_THEME : DARK_THEME
      state.isDarkTheme = !state.isDarkTheme
    },
    toggleActiveItem: (state, payload) => {
      const activeItem = payload.payload.section
      if (state.activeItem === activeItem) {
        state.activeItem = 'danpops'
        return
      }
      state.activeItem = activeItem
    }
  }
})

export const { toggleTheme, toggleActiveItem } = themeSlice.actions

export default themeSlice.reducer
