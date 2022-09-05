import { SpecialtiesImage, SpecialtiesItem, SpecialtiesItemLabel } from './styles'

interface ISpecialtyItem {
  image: string
  name: string
}

function SpecialtyItem ({ image, name }: ISpecialtyItem): JSX.Element {
  return (
    <SpecialtiesItem>
      <SpecialtiesImage src={image} />
      <SpecialtiesItemLabel>{name}</SpecialtiesItemLabel>
    </SpecialtiesItem>
  )
}

export default SpecialtyItem
