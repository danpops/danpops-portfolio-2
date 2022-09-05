import { colors } from '../../design'
import { Container as HeaderContainer } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import { SpecialtiesSection, SpecialtiesContainer } from './styles'
import useSpecialties from '../../hooks/useSpecialties'
import { SpecialtyTabs, SpecialtyContent } from '../../components/Specialties'
import { specialties } from '../../data/text'

function Specialties (): JSX.Element {
  const { activeSpecialty, activeData, setActiveSpecialty } = useSpecialties()

  return (
    <SpecialtiesSection bgColor={colors.light}>
      <HeaderContainer>
        <Header3 color={colors.dark}>{specialties.heading}</Header3>
        <Divider color={colors.primary} />
      </HeaderContainer>
      <SpecialtiesContainer>
        <SpecialtyTabs
          activeSpecialty={activeSpecialty}
          setActiveSpecialty={setActiveSpecialty}
        />
        <SpecialtyContent data={activeData} />
      </SpecialtiesContainer>
    </SpecialtiesSection>
  )
}

export default Specialties
