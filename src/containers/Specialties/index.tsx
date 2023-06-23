import { SpecialtiesContainer } from './styles'
import { sections, specialties } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { SpecialtyItem } from '../../components/SpecialtyItem'
import { ExpandSectionCustom } from '../../components/ExpandedSection'

function Specialties (): JSX.Element {
  const { theme } = useTheme()
  const renderSpecialties = specialties.data.map((item, i) => (
    <SpecialtyItem key={i} {...item} theme={theme} />
  ))
  return (
    <ExpandSectionCustom
      section={sections.SPECIALTIES}
      heading={specialties.heading}
      bgColor={theme.primary}
      color={theme.light}
    >
      <SpecialtiesContainer>{renderSpecialties}</SpecialtiesContainer>
    </ExpandSectionCustom>
  )
}

export default Specialties
