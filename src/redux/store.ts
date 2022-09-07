import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import specialtiesReducer from './specialtiesSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    specialties: specialtiesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
