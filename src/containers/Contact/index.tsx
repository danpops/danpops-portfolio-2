import { colors } from '../../design'
import { HeaderContainer, Section } from '../../components/Layout/styles'
import { Divider, Header3, Text } from '../../components/Text'
import { ContactOptionsContainer, LinkedInIcon, MailIcon } from './styles'
import { contact } from '../../assets/data/text'
import ContactOption from '../../components/ContactOption'

const ICON_SIZE = 46

function Contact (): JSX.Element {
  return (
    <Section id='contact' bgColor={colors.white}>
      <HeaderContainer>
        <Header3 color={colors.black}>{contact.heading}</Header3>
        <Divider color={colors.primary} />
        <Text color={colors.black}>{contact.content}</Text>
      </HeaderContainer>
      <ContactOptionsContainer>
        <ContactOption
          icon={<LinkedInIcon size={ICON_SIZE} />}
          href={contact.linkedin}
        />
        <ContactOption icon={<MailIcon size={ICON_SIZE} />} href={contact.email} />
      </ContactOptionsContainer>
    </Section>
  )
}

export default Contact
