import colors from '../../design/colors'
import { Container } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import {
  SpecialtiesSection,
  SpecialtiesContainer,
  SpecialtiesTabs,
  SpecialtiesContent
} from './styles'
import useSpecialties, { specialtyTabs } from '../../hooks/useSpecialties'
import SpecialtyTab from './SpecialtyTab'
import SpecialtyItem from './SpecialtyItem'

function Specialties (): JSX.Element {
  const { activeSpecialty, activeData, setActiveSpecialty } = useSpecialties()

  const renderTabs = specialtyTabs.map((specialty, index) => {
    const active = specialty === activeSpecialty
    return (
      <SpecialtyTab
        key={index}
        onClick={setActiveSpecialty(specialty)}
        active={active}
        label={specialty}
      />
    )
  })

  const renderContent = activeData.map(({ name, image }, index) => (
    <SpecialtyItem key={index} image={image} name={name} />
  ))

  return (
    <SpecialtiesSection bgColor={colors.light}>
      <Container>
        <Header3 color={colors.dark}>what are my specialties?</Header3>
        <Divider color={colors.primary} />
      </Container>
      <SpecialtiesContainer>
        <SpecialtiesTabs>{renderTabs}</SpecialtiesTabs>
        <SpecialtiesContent>{renderContent}</SpecialtiesContent>
      </SpecialtiesContainer>
    </SpecialtiesSection>
  )
}

export default Specialties
