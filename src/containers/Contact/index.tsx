import { HeaderContainer, Section } from '../../components/Layout/styles'
import { Divider, Header3, Text } from '../../components/Text'
import { ContactOptionsContainer, LinkedInIcon, MailIcon } from './styles'
import { contact } from '../../assets/data'
import ContactOption from '../../components/ContactOption'
import useTheme from '../../hooks/useTheme'

const ICON_SIZE = 46

function Contact (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id='contact' bgColor={theme.shadow}>
      <HeaderContainer>
        <Header3 color={theme.gray}>{contact.heading}</Header3>
        <Divider color={theme.primary} />
        <Text color={theme.gray}>{contact.content}</Text>
      </HeaderContainer>
      <ContactOptionsContainer>
        <ContactOption
          icon={<LinkedInIcon size={ICON_SIZE} color={theme.gray} />}
          href={contact.linkedin}
        />
        <ContactOption
          icon={<MailIcon size={ICON_SIZE} color={theme.gray} />}
          href={contact.email}
        />
      </ContactOptionsContainer>
    </Section>
  )
}

export default Contact
