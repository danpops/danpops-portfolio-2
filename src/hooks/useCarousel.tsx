import { Settings } from 'react-slick'
import { IUseCarousel } from '../types'
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
    breakpoint: breakpoints.md + 10,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: breakpoints.sm,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const AUTOPLAY_SPEED = 3000
const SPEED = 500
const SLIDES_TO_SCROLL = 1

export const useCarousel = ({
  length
}: IUseCarousel): { settings: Settings } => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length,
    slidesToScroll: SLIDES_TO_SCROLL,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    speed: SPEED,
    arrows: false,
    responsive: responsiveBreakpoints
  }
  return { settings }
}
