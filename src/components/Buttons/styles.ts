import { animated } from 'react-spring'
import styled from 'styled-components'
import { IThemeStyle } from '../../types'

export const PrimaryButton = styled(animated.button)`
  box-shadow: 0 0.12rem 0.25rem #00000055 !important;
  border-radius: 1.8rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.$bgcolor};
  `}
`
