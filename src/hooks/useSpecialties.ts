import { useDispatch, useSelector } from 'react-redux'
import { specialties } from '../assets/data'
import { toggleSpecialty } from '../redux/specialtiesSlice'
import { RootState } from '../redux/store'
import { IUseSpecialties } from '../types'

export enum SpecialtiesType {
  frontend = 'frontend',
  backend = 'backend',
  languages = 'languages',
  more = 'more'
}

export const specialtyTabs = [
  SpecialtiesType.languages,
  SpecialtiesType.frontend,
  SpecialtiesType.backend,
  SpecialtiesType.more
]

const useSpecialties = (): IUseSpecialties => {
  const { title, data } = useSelector((state: RootState) => state.specialties)
  const dispatch = useDispatch()

  const setActiveSpecialty = (type: SpecialtiesType) => () =>
    dispatch(toggleSpecialty({ ...specialties.data[type] }))

  return {
    activeSpecialty: title,
    activeData: data,
    setActiveSpecialty
  }
}

export default useSpecialties
