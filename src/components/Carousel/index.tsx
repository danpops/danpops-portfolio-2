import Slider from 'react-slick'
import { useCarousel } from '../../hooks/useCarousel'
import { experienceData } from '../../data/experience'
import { CompanyContainer, CompanyImage, CompanyText } from './styles'
import { IExperienceData } from '../../types'

function Carousel (): JSX.Element {
  const { settings } = useCarousel({ length: experienceData.length })

  function composeCarouselItems (
    exp: IExperienceData,
    index: number
  ): JSX.Element {
    return (
      <CompanyContainer key={index}>
        <CompanyImage src={exp.image} />
        <CompanyText>{exp.company}</CompanyText>
      </CompanyContainer>
    )
  }

  return (
    <Slider {...settings}>{experienceData.map(composeCarouselItems)}</Slider>
  )
}

export default Carousel
