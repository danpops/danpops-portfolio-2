import { describe, expect } from '@jest/globals'
import { renderHook, act } from '@testing-library/react'
import { specialties } from '../../assets/data'
import useSpecialties, { SpecialtiesType } from '../useSpecialties'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const Wrapper = ({ children }: any): any => (
  <Provider store={store}>{children}</Provider>
)

describe('useSpecialties', () => {
  it('should return initial specialties state', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    const { activeSpecialty, activeData } = result.current

    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.languages.title,
      activeData: specialties.data.languages.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set backend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.backend)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.backend.title,
      activeData: specialties.data.backend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set frontend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.frontend)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.frontend.title,
      activeData: specialties.data.frontend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set more specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.more)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.more.title,
      activeData: specialties.data.more.data
    }
    expect(actual).toEqual(expected)
  })
})
