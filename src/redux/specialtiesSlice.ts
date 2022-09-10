import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { specialties } from '../assets/data'
import { SpecialtyState } from '../types'

const initialState: SpecialtyState = {
  title: specialties.data.languages.title,
  data: specialties.data.languages.data
}

export const specialtiesSlice = createSlice({
  name: 'specialties',
  initialState,
  reducers: {
    toggleSpecialty: (state, action: PayloadAction<SpecialtyState>) => {
      state.title = action.payload.title
      state.data = action.payload.data
    }
  }
})

export const { toggleSpecialty } = specialtiesSlice.actions

export default specialtiesSlice.reducer
