import { colors } from '../../design'
import { HeaderContainer, Section } from '../../components/Layout/styles'
import { Divider, Header3, Text } from '../../components/Text'
import { ContactOptionsContainer, LinkedInIcon, MailIcon } from './styles'
import { contact } from '../../assets/data/text'
import styled from 'styled-components'

const ContactOption = styled.a`
  text-decoration: none;
  cursor: pointer;
`

function Contact (): JSX.Element {
  return (
    <Section bgColor={colors.white}>
      <HeaderContainer>
        <Header3 color={colors.dark}>{contact.heading}</Header3>
        <Divider color={colors.primary} />
        <Text color={colors.dark}>{contact.content}</Text>
      </HeaderContainer>
      <ContactOptionsContainer>
        <ContactOption
          target='_blank'
          rel='noopener noreferrer'
          href={contact.linkedin}
        >
          <LinkedInIcon size={46} />
        </ContactOption>
        <ContactOption
          target='_blank'
          rel='noopener noreferrer'
          href={contact.email}
        >
          <MailIcon size={48} />
        </ContactOption>
      </ContactOptionsContainer>
    </Section>
  )
}

export default Contact
