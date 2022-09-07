import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ color }) => color};
  margin: 1.8rem;
`
export const MailIcon = styled(IoMdMail)`
  color: ${({ color }) => color};
  margin: 1.8rem;
`

export const ContactOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.3rem 0;
`
