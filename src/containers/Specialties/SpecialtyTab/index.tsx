import { MouseEventHandler } from 'react'
import { SpecialtiesTabItem, SpecialtiesButton } from './styles'

interface ISpecialtyTab {
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
}

function SpecialtyTab ({
  active,
  onClick,
  label
}: ISpecialtyTab): JSX.Element {
  return (
    <SpecialtiesTabItem>
      <SpecialtiesButton active={active} onClick={onClick}>
        {label}
      </SpecialtiesButton>
    </SpecialtiesTabItem>
  )
}

export default SpecialtyTab
