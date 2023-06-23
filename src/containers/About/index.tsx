import { Text } from '../../components/Text'
import { about, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { ExpandSectionCustom } from '../../components/ExpandedSection'

function About (): JSX.Element {
  const { theme } = useTheme()
  return (
    <ExpandSectionCustom
      section={sections.ABOUT}
      heading={about.heading}
      bgColor={theme.shadow}
      color={theme.tertiary}
    >
      <Text color={theme.tertiary}>{about.content}</Text>
    </ExpandSectionCustom>
  )
}

export default About
