import useTypewriter from '../../hooks/useTypewriter'
import { ITypewriter } from '../../types'
import { TypewriterText } from './styles'

function Typewriter ({ content }: ITypewriter): JSX.Element {
  const displayedContent = useTypewriter({ content, speed: 200 })
  return <TypewriterText>{displayedContent}</TypewriterText>
}

export default Typewriter
