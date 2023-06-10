import { useDispatch, useSelector } from 'react-redux'
import { specialties } from '../assets/data'
import { toggleSpecialty } from '../redux/specialtiesSlice'
import { RootState } from '../redux/store'
import { IUseSpecialties } from '../types'

export enum SpecialtiesType {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Languages = 'Languages',
  Other = 'Other'
}

export const specialtyTabs = [
  SpecialtiesType.Frontend,
  SpecialtiesType.Backend,
  SpecialtiesType.Languages,
  SpecialtiesType.Other
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
