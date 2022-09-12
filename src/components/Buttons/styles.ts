import { animated } from 'react-spring'
import styled from 'styled-components'
import { IThemeStyle } from '../../types'

export const PrimaryButton = styled(animated.button)`
  box-shadow: 0 0.125rem 0.25rem #00000055 !important;
  text-transform: lowercase !important;
  border-radius: 1rem;
  border: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 1rem 2rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
`
