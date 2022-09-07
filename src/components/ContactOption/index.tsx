import useBoopAnimation from '../../hooks/useBoopAnimation'
import { IContactOption } from '../../types'
import { ContactOptionContainer } from './styles'

function ContactOption ({ icon, href }: IContactOption): JSX.Element {
  const animationProps = useBoopAnimation()
  return (
    <ContactOptionContainer
      {...animationProps}
      target='_blank'
      rel='noopener noreferrer'
      href={href}
    >
      {icon}
    </ContactOptionContainer>
  )
}

export default ContactOption
