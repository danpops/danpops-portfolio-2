import { renderHook, act } from '@testing-library/react'
import useNavigation from '../useNavigation'

describe('useNavigation', () => {
  it('should return default state', async () => {
    const { result } = renderHook(() => useNavigation())
    const { expanded, isTransparent } = result.current

    const actual = { expanded, isTransparent }
    const expected = { expanded: false, isTransparent: false }

    expect(actual).toEqual(expected)
  })

  it('should set expanded value to true', async () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.setExpanded(true))

    const actual = result.current.expanded
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('should update expanded when calling toggleNavbar', async () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.toggleNavbar())

    const actual = result.current.expanded
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('should set expanded false when calling clickHero', async () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.setExpanded(true))
    expect(result.current.expanded).toBe(true)

    act(() => result.current.clickHero())

    const actual = result.current.expanded
    const expected = false

    expect(actual).toEqual(expected)
  })
})
