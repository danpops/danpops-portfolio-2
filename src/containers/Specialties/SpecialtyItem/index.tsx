import { ISpecialtyItem } from '../../../types'
import {
  SpecialtiesImage,
  SpecialtiesItem,
  SpecialtiesItemLabel
} from './styles'

function SpecialtyItem ({ image, name }: ISpecialtyItem): JSX.Element {
  return (
    <SpecialtiesItem>
      <SpecialtiesImage src={image} />
      <SpecialtiesItemLabel>{name}</SpecialtiesItemLabel>
    </SpecialtiesItem>
  )
}

export default SpecialtyItem
