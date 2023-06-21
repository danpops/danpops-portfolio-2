import { HeaderContainer } from '../../components/Layout/styles'
import {
  SpecialtiesContainer,
  SpecialtiesSection,
  SpecialtyHeader
} from './styles'
import { sections, specialties } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { SpecialtyItem } from '../../components/SpecialtyItem'

function Specialties (): JSX.Element {
  const { theme } = useTheme()
  const renderSpecialties = specialties.data.map((item, i) => (
    <SpecialtyItem key={i} {...item} theme={theme} />
  ))
  return (
    <SpecialtiesSection id={sections.SPECIALTIES} bgColor={theme.primary}>
      <HeaderContainer>
        <SpecialtyHeader color={theme.light}>
          {specialties.heading}
        </SpecialtyHeader>
        <SpecialtiesContainer>{renderSpecialties}</SpecialtiesContainer>
      </HeaderContainer>
    </SpecialtiesSection>
  )
}

export default Specialties
