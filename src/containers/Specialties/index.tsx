import { HeaderContainer } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import { SpecialtiesSection, SpecialtiesContainer } from './styles'
import useSpecialties from '../../hooks/useSpecialties'
import { SpecialtyTabs, SpecialtyContent } from '../../components/Specialties'
import { specialties } from '../../assets/data/text'
import useTheme from '../../hooks/useTheme'

function Specialties (): JSX.Element {
  const { activeSpecialty, activeData, setActiveSpecialty } = useSpecialties()
  const { theme } = useTheme()

  return (
    <SpecialtiesSection id='specialties' bgColor={theme.shadow}>
      <HeaderContainer>
        <Header3 color={theme.gray}>{specialties.heading}</Header3>
        <Divider color={theme.primary} />
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
