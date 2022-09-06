import { colors } from '../../design'
import { HeaderContainer } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import { SpecialtiesSection, SpecialtiesContainer } from './styles'
import useSpecialties from '../../hooks/useSpecialties'
import { SpecialtyTabs, SpecialtyContent } from '../../components/Specialties'
import { specialties } from '../../assets/data/text'

function Specialties (): JSX.Element {
  const { activeSpecialty, activeData, setActiveSpecialty } = useSpecialties()

  return (
    <SpecialtiesSection id='specialties' bgColor={colors.white}>
      <HeaderContainer>
        <Header3 color={colors.black}>{specialties.heading}</Header3>
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
