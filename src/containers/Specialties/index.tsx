import colors from '../../design/colors'
import { Container } from '../../components/Layout/styles'
import { Divider, Header3 } from '../../components/Text'
import { PrimaryButton } from '../../components/Buttons'
import testIcon from '../../assets/icons/typescript.png'
import {
  SpecialtiesSection,
  SpecialtiesContainer,
  SpecialtiesTabs,
  SpecialtiesTabItem,
  SpecialtiesContent,
  SpecialtiesItem,
  SpecialtiesImage
} from './styles'

function Specialties (): JSX.Element {
  return (
    <SpecialtiesSection bgColor={colors.light}>
      <Container>
        <Header3 color={colors.dark}>what are my specialties?</Header3>
        <Divider color={colors.primary} />
      </Container>
      <SpecialtiesContainer>
        <SpecialtiesTabs>
          <SpecialtiesTabItem>
            <PrimaryButton>item 1</PrimaryButton>
          </SpecialtiesTabItem>
          <SpecialtiesTabItem>
            <PrimaryButton>item 2</PrimaryButton>
          </SpecialtiesTabItem>
          <SpecialtiesTabItem>
            <PrimaryButton>item 3</PrimaryButton>
          </SpecialtiesTabItem>
          <SpecialtiesTabItem>
            <PrimaryButton>item 4</PrimaryButton>
          </SpecialtiesTabItem>
        </SpecialtiesTabs>
        <SpecialtiesContent>
          <SpecialtiesItem>
            <SpecialtiesImage src={testIcon} />
            <p>item 1</p>
          </SpecialtiesItem>
          <SpecialtiesItem>
            <SpecialtiesImage src={testIcon} />
            <p>item 2</p>
          </SpecialtiesItem>
          <SpecialtiesItem>
            <SpecialtiesImage src={testIcon} />
            <p>item 3</p>
          </SpecialtiesItem>
          <SpecialtiesItem>
            <SpecialtiesImage src={testIcon} />
            <p>item 4</p>
          </SpecialtiesItem>
        </SpecialtiesContent>
      </SpecialtiesContainer>
    </SpecialtiesSection>
  )
}

export default Specialties
