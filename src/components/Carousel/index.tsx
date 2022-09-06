import Slider from 'react-slick'
import { useCarousel } from '../../hooks/useCarousel'
import { experienceData } from '../../assets/data/experience'
import { CompanyContainer, CompanyImage, CompanyText } from './styles'
import { IExperienceData } from '../../types'

function Carousel (): JSX.Element {
  const { settings } = useCarousel({ length: experienceData.length })

  function composeCarouselItems (
    exp: IExperienceData,
    index: number
  ): JSX.Element {
    const { image, company, url } = exp
    return (
      <CompanyContainer key={index}>
        <CompanyImage src={image} />
        <CompanyText target='_blank' rel='noopener noreferrer' href={url}>
          {company}
        </CompanyText>
      </CompanyContainer>
    )
  }

  return (
    <Slider {...settings}>{experienceData.map(composeCarouselItems)}</Slider>
  )
}

export default Carousel
