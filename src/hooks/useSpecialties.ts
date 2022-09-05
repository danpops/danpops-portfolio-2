import { useReducer } from 'react'
import { specialties } from '../data/specialties'

export enum SpecialtiesActionKind {
  SET_SPECIALTY_CATEGORY = 'SET_SPECIALTY_CATEGORY'
}
export enum SpecialtiesType {
  frontend = 'frontend',
  backend = 'backend',
  languages = 'languages',
  more = 'more'
}

interface SpecialtyData {
  image: string
  alt: string
  name: string
  href: string
}

interface SpecialtiesAction {
  type: SpecialtiesActionKind.SET_SPECIALTY_CATEGORY
  title: string
  data: SpecialtyData[]
}

interface SpecialtyState {
  title: string
  data: SpecialtyData[]
}
interface IUseSpecialties {
  activeSpecialty: string
  activeData: SpecialtyData[]
  setActiveSpecialty: (type: SpecialtiesType) => () => void
}

const initialSpecialtyState: SpecialtyState = {
  title: specialties.languages.title,
  data: specialties.languages.data
}

const specialtiesReducer = (
  state: SpecialtyState,
  action: SpecialtiesAction
): SpecialtyState => {
  switch (action.type) {
    case SpecialtiesActionKind.SET_SPECIALTY_CATEGORY:
      return { ...state, title: action.title, data: action.data }
  }
}

export const specialtyTabs = [
  SpecialtiesType.languages,
  SpecialtiesType.frontend,
  SpecialtiesType.backend,
  SpecialtiesType.more
]

const useSpecialties = (): IUseSpecialties => {
  const [state, dispatch] = useReducer(
    specialtiesReducer,
    initialSpecialtyState
  )

  const setActiveSpecialty = (type: SpecialtiesType): (() => void) => {
    return () =>
      dispatch({
        title: specialties[type].title,
        type: SpecialtiesActionKind.SET_SPECIALTY_CATEGORY,
        data: specialties[type].data
      })
  }

  return { activeSpecialty: state.title, activeData: state.data, setActiveSpecialty }
}

export default useSpecialties
