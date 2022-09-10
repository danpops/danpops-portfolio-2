import { renderHook, act } from '@testing-library/react'
import useNavigation from '../useNavigation'

describe('useNavigation', () => {
  it('should return default state', async () => {
    const { result } = renderHook(() => useNavigation())
    const { isNavigationExpanded, isTransparent } = result.current

    const actual = { isNavigationExpanded, isTransparent }
    const expected = { isNavigationExpanded: false, isTransparent: false }

    expect(actual).toEqual(expected)
  })

  it('should update expanded when calling toggleNavbar', async () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.toggleNavbar())

    const actual = result.current.isNavigationExpanded
    const expected = true

    expect(actual).toEqual(expected)
  })

  it('should set expanded false when calling clickHero', async () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.toggleNavbar())
    expect(result.current.isNavigationExpanded).toBe(true)

    act(() => result.current.clickHero())

    const actual = result.current.isNavigationExpanded
    const expected = false

    expect(actual).toEqual(expected)
  })
})
