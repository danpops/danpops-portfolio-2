import { Settings } from 'react-slick'
import { breakpoints } from '../utils/devices'

const responsiveBreakpoints = [
  {
    breakpoint: breakpoints.lg,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: breakpoints.md,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: breakpoints.md - 100,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const AUTOPLAY_SPEED = 3000
const SPEED = 500
const SLIDES_TO_SCROLL = 1

export const useCarousel = (): { settings: Settings } => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: SLIDES_TO_SCROLL,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    speed: SPEED,
    arrows: false,
    responsive: responsiveBreakpoints
  }
  return { settings }
}
