import useBoopAnimation from '../../../hooks/animations/useBoopAnimation'
import { SpecialtiesType, specialtyTabs } from '../../../hooks/useSpecialties'
import useTheme from '../../../hooks/useTheme'
import { ISpecialtyTabs, ISpecialtyTab } from '../../../types'
import { SpecialtiesTabsContainer, SpecialtyButton } from './styles'

function SpecialtyTab ({
  specialty,
  activeSpecialty,
  setActiveSpecialty
}: ISpecialtyTab): JSX.Element {
  const active = specialty === activeSpecialty
  const { theme } = useTheme()
  const animatedProps = useBoopAnimation()

  return (
    <SpecialtyButton
      {...animatedProps}
      activeBg={theme.primary}
      activeColor={theme.light}
      bgColor={theme.shadow}
      color={theme.tertiary}
      active={active}
      onClick={setActiveSpecialty(specialty)}
    >
      {specialty}
    </SpecialtyButton>
  )
}

function SpecialtyTabs ({
  activeSpecialty,
  setActiveSpecialty
}: ISpecialtyTabs): JSX.Element {
  function composeTabItems (
    specialty: SpecialtiesType,
    index: number
  ): JSX.Element {
    return (
      <SpecialtyTab
        key={index}
        specialty={specialty}
        setActiveSpecialty={setActiveSpecialty}
        activeSpecialty={activeSpecialty}
      />
    )
  }

  return (
    <SpecialtiesTabsContainer>
      {specialtyTabs.map(composeTabItems)}
    </SpecialtiesTabsContainer>
  )
}

export default SpecialtyTabs
