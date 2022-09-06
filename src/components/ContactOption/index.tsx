import { IContactOption } from '../../types'
import { ContactOptionContainer } from './styles'

function ContactOption ({ icon, href }: IContactOption): JSX.Element {
  return (
    <ContactOptionContainer
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      {icon}
    </ContactOptionContainer>
  )
}

export default ContactOption
