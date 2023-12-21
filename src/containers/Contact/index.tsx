import { HeaderContainer, Section } from '../../components/Layout/styles'
import {
  ContactHeader,
  ContactOptionsContainer,
  ContactText,
  GitHubIcon,
  LinkedInIcon,
  MailIcon
} from './styles'
import { contact, sections } from '../../assets/data'
import ContactOption from '../../components/ContactOption'
import useTheme from '../../hooks/useTheme'

const ICON_SIZE = 30

function Contact (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.CONTACT} $bgcolor={theme.primary}>
      <HeaderContainer>
        <ContactHeader color={theme.light}>{contact.heading}</ContactHeader>
        <ContactText color={theme.light}>{contact.text1}</ContactText>
        <ContactText color={theme.light}>{contact.text2}</ContactText>
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
      </HeaderContainer>
    </Section>
  )
}

export default Contact
