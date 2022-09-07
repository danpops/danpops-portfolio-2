import { describe, expect } from '@jest/globals'
import { renderHook, act } from '@testing-library/react'
import { specialties } from '../../assets/data/specialties'
import useSpecialties from '../useSpecialties'
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
      activeSpecialty: specialties.languages.title,
      activeData: specialties.languages.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set backend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty('backend')())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.backend.title,
      activeData: specialties.backend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set frontend specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty('frontend')())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.frontend.title,
      activeData: specialties.frontend.data
    }
    expect(actual).toEqual(expected)
  })

  it('should set more specialty data', async () => {
    const { result } = renderHook(() => useSpecialties(), { wrapper: Wrapper })

    act(() => result.current.setActiveSpecialty('more')())

    const { activeSpecialty, activeData } = result.current
    const actual = { activeSpecialty, activeData }
    const expected = {
      activeSpecialty: specialties.more.title,
      activeData: specialties.more.data
    }
    expect(actual).toEqual(expected)
  })
})
