import { HeaderContainer } from '../../components/Layout/styles'
import {
  SpecialtiesContainer,
  SpecialtiesSection,
  SpecialtyHeader
} from './styles'
import { sections, specialties } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { SpecialtyItem } from '../../components/SpecialtyItem'
import RevealAnimation from '../../components/RevealAnimation'

function Specialties (): JSX.Element {
  const { theme } = useTheme()
  const renderSpecialties = specialties.data.map((item, i) => (
    <SpecialtyItem key={i} {...item} theme={theme} />
  ))
  return (
    <SpecialtiesSection id={sections.SPECIALTIES} $bgcolor={theme.primary}>
      <RevealAnimation>
        <HeaderContainer>
          <SpecialtyHeader color={theme.light}>
            {specialties.heading}
          </SpecialtyHeader>
          <SpecialtiesContainer>{renderSpecialties}</SpecialtiesContainer>
        </HeaderContainer>
      </RevealAnimation>
    </SpecialtiesSection>
  )
}

export default Specialties
