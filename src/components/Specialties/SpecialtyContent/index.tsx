import { ISpecialtyContent } from '../../../types'
import {
  SpecialtiesContentContainer,
  SpecialtiesImage,
  SpecialtiesItem,
  SpecialtiesItemLabel
} from './styles'

function SpecialtyContent ({ data }: ISpecialtyContent): JSX.Element {
  const renderContent = data.map(({ name, image }, index) => (
    <SpecialtiesItem key={index}>
      <SpecialtiesImage src={image} />
      <SpecialtiesItemLabel>{name}</SpecialtiesItemLabel>
    </SpecialtiesItem>
  ))

  return (
    <SpecialtiesContentContainer>{renderContent}</SpecialtiesContentContainer>
  )
}

export default SpecialtyContent