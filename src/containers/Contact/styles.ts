import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import devices from '../../utils/devices'
import { Header3, Text } from '../../components/Text'

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ color }) => color};
  margin: 1.4rem 0;
`
export const MailIcon = styled(IoMdMail)`
  color: ${({ color }) => color};
  margin: 1.4rem 0;
`
export const GitHubIcon = styled(FaGithub)`
  color: ${({ color }) => color};
  margin: 1.4rem 0;
`

export const ContactOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 5rem));
  align-items: center;
  justify-content: start;
  margin: 2rem 0;
  padding: 0;
  column-gap: 1rem;
  @media ${devices.md} {
    grid-template-columns: repeat(3, minmax(0, 4rem));
    max-width: 40rem;
  }
  @media ${devices.lg} {
    max-width: 60rem;
  }
`
export const ContactHeader = styled(Header3)``
export const ContactText = styled(Text)``
