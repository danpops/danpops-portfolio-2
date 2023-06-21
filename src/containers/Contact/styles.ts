import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import devices from '../../utils/devices'

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
  grid-template-columns: repeat(3, minmax(0, 4rem));
  align-items: center;
  justify-items: flex-start;
  max-width: 30rem;
  margin-top: 2rem;
  padding: 0 2.5rem;
  column-gap: 1rem;
  @media ${devices.md} {
    padding: 0 6.5rem;
  }
  @media ${devices.lg} {
    padding: 0 19.5rem;
  }
`
