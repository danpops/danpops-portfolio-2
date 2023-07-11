import {
  SiMicrosoftazure,
  SiAmazonaws,
  SiJavascript,
  SiCucumber
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import styled, { StyledComponent } from 'styled-components'
import { iconStyle } from '../../design/icons'
import { IconType } from 'react-icons'

const CustomIcon = (
  icon: IconType
): StyledComponent<IconType, any, {}, never> => styled(icon)`
  ${iconStyle}
`
const AmazonIcon = CustomIcon(SiAmazonaws)
const AzureIcon = CustomIcon(SiMicrosoftazure)
const CucumberIcon = CustomIcon(SiCucumber)
const JavaScriptIcon = CustomIcon(SiJavascript)
const ReactIcon = CustomIcon(FaReact)
export const specialtiesData = [
  {
    name: 'AWS',
    icon: <AmazonIcon />,
    href: 'https://aws.amazon.com'
  },
  {
    name: 'Azure',
    icon: <AzureIcon />,
    href: 'https://azure.microsoft.com'
  },
  {
    name: 'Cucumber',
    icon: <CucumberIcon />,
    href: 'https://cucumber.io/'
  },
  {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
    href: 'https://www.javascript.com/'
  },
  {
    name: 'React',
    icon: <ReactIcon />,
    href: 'https://react.dev/'
  },
  {
    name: 'React Native',
    icon: <ReactIcon />,
    href: 'https://reactnative.dev'
  }
]
