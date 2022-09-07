import { SpecialtiesType, specialtyTabs } from '../../../hooks/useSpecialties'
import useTheme from '../../../hooks/useTheme'
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
  const { theme } = useTheme()
  function composeTabItems (
    specialty: SpecialtiesType,
    index: number
  ): JSX.Element {
    const active = specialty === activeSpecialty

    return (
      <SpecialtiesTabItem key={index}>
        <SpecialtiesButton
          activeBg={theme.primary}
          activeColor={theme.secondary}
          bgColor={theme.secondary}
          color={theme.tertiary}
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
