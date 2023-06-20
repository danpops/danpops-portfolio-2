import { HeaderContainer } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import { SpecialtiesContainer, SpecialtiesSection } from './styles'
import { sections, specialties } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { SpecialtyItem } from '../../components/SpecialtyItem'

function Specialties (): JSX.Element {
  const { theme } = useTheme()
  const renderSpecialties = specialties.data.map((item, i) => (
    <SpecialtyItem key={i} {...item} theme={theme} />
  ))
  return (
    <SpecialtiesSection id={sections.SPECIALTIES} bgColor={theme.shadow}>
      <HeaderContainer>
        <Header3 color={theme.tertiary}>{specialties.heading}</Header3>
        <Divider color={theme.primary} />
      </HeaderContainer>
      <SpecialtiesContainer>{renderSpecialties}</SpecialtiesContainer>
    </SpecialtiesSection>
  )
}

export default Specialties
