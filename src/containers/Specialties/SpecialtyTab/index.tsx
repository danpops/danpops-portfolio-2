import { ISpecialtyTab } from '../../../types'
import { SpecialtiesTabItem, SpecialtiesButton } from './styles'

function SpecialtyTab ({ active, onClick, label }: ISpecialtyTab): JSX.Element {
  return (
    <SpecialtiesTabItem>
      <SpecialtiesButton active={active} onClick={onClick}>
        {label}
      </SpecialtiesButton>
    </SpecialtiesTabItem>
  )
}

export default SpecialtyTab
