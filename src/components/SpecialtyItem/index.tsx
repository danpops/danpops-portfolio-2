import useBoopAnimation from '../../hooks/animations/useBoopAnimation'
import { ISpecialItem } from '../../types'
import {
  SpecialtiesIcon,
  SpecialtyItemGrid,
  SpecialtiesItemLabel,
  SpecialtyItemContainer
} from './styles'

export function SpecialtyItem (props: ISpecialItem): JSX.Element {
  const animationProps = useBoopAnimation()
  return (
    <SpecialtyItemContainer {...animationProps}>
      <SpecialtyItemGrid
        href={props.href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <SpecialtiesIcon color={props.theme.light}>
          {props.icon}
        </SpecialtiesIcon>
        <SpecialtiesItemLabel color={props.theme.light}>
          {props.name}
        </SpecialtiesItemLabel>
      </SpecialtyItemGrid>
    </SpecialtyItemContainer>
  )
}
