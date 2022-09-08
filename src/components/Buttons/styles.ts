import { animated } from 'react-spring'
import styled from 'styled-components'
import { IThemeStyle } from '../../types'

export const PrimaryButton = styled(animated.button)`
  box-shadow: 0 0.125rem 0.25rem #00000055 !important;
  text-transform: lowercase !important;
  border-radius: 10rem;
  border: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 1.25rem 2.25rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
`
