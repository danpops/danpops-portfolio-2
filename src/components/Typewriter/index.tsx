import useTheme from '../../hooks/useTheme'
import useTypewriter from '../../hooks/useTypewriter'
import { ITypewriter } from '../../types'
import { CustomTWText, CustomTWTypedText, TypewriterText } from './styles'

function Typewriter ({ content }: ITypewriter): JSX.Element {
  const { theme } = useTheme()
  const typewriterText = useTypewriter(content)

  return (
    <TypewriterText>
      <CustomTWText color={theme.tertiary}>I'm a</CustomTWText>
      <CustomTWTypedText cursorColor={theme.tertiary} color={theme.gray}>
        {typewriterText}
      </CustomTWTypedText>
    </TypewriterText>
  )
}

export default Typewriter
