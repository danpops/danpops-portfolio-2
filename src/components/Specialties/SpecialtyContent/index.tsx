import useBoopAnimation from '../../../hooks/animations/useBoopAnimation'
import useTheme from '../../../hooks/useTheme'
import { ISpecialtyContent, ISpecialtyItem } from '../../../types'
import {
  SpecialtiesContentContainer,
  SpecialtiesImage,
  SpecialtyItemContainer,
  SpecialtiesItemLabel,
  SpecialtyItemContent
} from './styles'

function SpecialtyItem ({ name, href, image }: ISpecialtyItem): JSX.Element {
  const animatedProps = useBoopAnimation()
  const { theme } = useTheme()
  return (
    <SpecialtyItemContainer
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <SpecialtyItemContent {...animatedProps}>
        <SpecialtiesImage alt={name} src={image} />
        <SpecialtiesItemLabel color={theme.tertiary}>
          {name}
        </SpecialtiesItemLabel>
      </SpecialtyItemContent>
    </SpecialtyItemContainer>
  )
}

function SpecialtyContent ({ data }: ISpecialtyContent): JSX.Element {
  const renderContent = data.map(({ name, image, href, alt }, index) => {
    return <SpecialtyItem key={index} name={name} image={image} href={href} />
  })

  return (
    <SpecialtiesContentContainer>{renderContent}</SpecialtiesContentContainer>
  )
}

export default SpecialtyContent
