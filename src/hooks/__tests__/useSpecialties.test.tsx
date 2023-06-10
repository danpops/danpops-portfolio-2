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
      activeSpecialty: specialties.data.Languages.title,
      activeData: specialties.data.Languages.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set Backend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.Backend)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.Backend.title,
      activeData: specialties.data.Backend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set Frontend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.Frontend)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.Frontend.title,
      activeData: specialties.data.Frontend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set Other specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty(SpecialtiesType.Other)())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.data.Other.title,
      activeData: specialties.data.Other.data
    }
    expect(actual).toEqual(expected)
  })
})
