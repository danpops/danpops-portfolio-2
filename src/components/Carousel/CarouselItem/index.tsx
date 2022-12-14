import { CompanyContainer, CompanyImage, CompanyText } from './styles'
import useTheme from '../../../hooks/useTheme'
import useBoopAnimation from '../../../hooks/animations/useBoopAnimation'
import { ICarouselItem } from '../../../types'

function CarouselItem ({ exp }: ICarouselItem): JSX.Element {
  const { image, company, url } = exp
  const { theme } = useTheme()
  const { onMouseEnter, style } = useBoopAnimation()

  return (
    <CompanyContainer style={style}>
      <CompanyImage src={image} />
      <CompanyText
        onMouseEnter={onMouseEnter}
        target='_blank'
        rel='noopener noreferrer'
        href={url}
        color={theme.light}
      >
        {company}
      </CompanyText>
    </CompanyContainer>
  )
}

export default CarouselItem
