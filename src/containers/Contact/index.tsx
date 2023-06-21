import { HeaderContainer, Section } from '../../components/Layout/styles'
import { Divider, Header3, Text } from '../../components/Text'
import { ContactOptionsContainer, GitHubIcon, LinkedInIcon, MailIcon } from './styles'
import { contact, sections } from '../../assets/data'
import ContactOption from '../../components/ContactOption'
import useTheme from '../../hooks/useTheme'

const ICON_SIZE = 30

function Contact (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.CONTACT} bgColor={theme.primary}>
      <HeaderContainer>
        <Header3 color={theme.light}>{contact.heading}</Header3>
        <Divider color={theme.light} />
        <Text color={theme.light}>{contact.content}</Text>
      </HeaderContainer>
      <ContactOptionsContainer>
        <ContactOption
          icon={<LinkedInIcon size={ICON_SIZE} color={theme.light} />}
          href={contact.linkedin}
        />
        <ContactOption
          icon={<MailIcon size={ICON_SIZE} color={theme.light} />}
          href={contact.email}
        />
        <ContactOption
          icon={<GitHubIcon size={ICON_SIZE} color={theme.light} />}
          href={contact.github}
        />
      </ContactOptionsContainer>
    </Section>
  )
}

export default Contact
