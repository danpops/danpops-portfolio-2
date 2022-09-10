import Slider from 'react-slick'
import { useCarousel } from '../../hooks/useCarousel'
import { experience } from '../../assets/data'
import { IExperienceData } from '../../types'
import CarouselItem from './CarouselItem'

function Carousel (): JSX.Element {
  const { settings } = useCarousel()

  function composeCarouselItems (
    exp: IExperienceData,
    index: number
  ): JSX.Element {
    return <CarouselItem key={index} exp={exp} />
  }

  return (
    <Slider {...settings}>{experience.data.map(composeCarouselItems)}</Slider>
  )
}

export default Carousel
