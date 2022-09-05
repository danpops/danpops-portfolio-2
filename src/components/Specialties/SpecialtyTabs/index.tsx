import { SpecialtiesType, specialtyTabs } from '../../../hooks/useSpecialties'
import { ISpecialtyTabs } from '../../../types'
import {
  SpecialtiesTabsContainer,
  SpecialtiesTabItem,
  SpecialtiesButton
} from './styles'

function SpecialtyTabs ({
  activeSpecialty,
  setActiveSpecialty
}: ISpecialtyTabs): JSX.Element {
  function composeTabItems (
    specialty: SpecialtiesType,
    index: number
  ): JSX.Element {
    const active = specialty === activeSpecialty

    return (
      <SpecialtiesTabItem key={index}>
        <SpecialtiesButton
          active={active}
          onClick={setActiveSpecialty(specialty)}
        >
          {specialty}
        </SpecialtiesButton>
      </SpecialtiesTabItem>
    )
  }

  return (
    <SpecialtiesTabsContainer>
      {specialtyTabs.map(composeTabItems)}
    </SpecialtiesTabsContainer>
  )
}

export default SpecialtyTabs
