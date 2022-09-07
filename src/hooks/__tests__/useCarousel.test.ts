import { renderHook } from '@testing-library/react'
import { responsiveBreakpoints, useCarousel } from '../useCarousel'

describe('useCarousel', () => {
  it('should return carousel settings', async () => {
    const { result } = renderHook(() => useCarousel())
    const actual = result.current.settings
    const expected = {
      infinite: true,
      swipeToSlide: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      arrows: false,
      responsive: responsiveBreakpoints
    }
    expect(actual).toEqual(expected)
  })
})
