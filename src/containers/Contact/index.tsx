import {
  ContactOptionsContainer,
  ContactText,
  GitHubIcon,
  LinkedInIcon,
  MailIcon
} from './styles'
import { contact, sections } from '../../assets/data'
import ContactOption from '../../components/ContactOption'
import useTheme from '../../hooks/useTheme'
import { ExpandSectionCustom } from '../../components/ExpandedSection'
import styled from 'styled-components'

const ICON_SIZE = 30
const ContactContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto));
  grid-template-columns: 1fr;
`
function Contact (): JSX.Element {
  const { theme } = useTheme()
  return (
    <ExpandSectionCustom
      section={sections.CONTACT}
      heading={contact.heading}
      bgColor={theme.primary}
      color={theme.light}
    >
      <ContactContent>
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
      </ContactContent>
    </ExpandSectionCustom>
  )
}

export default Contact
