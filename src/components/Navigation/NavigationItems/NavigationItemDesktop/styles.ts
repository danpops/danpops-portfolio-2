import { animated } from 'react-spring'
import styled from 'styled-components'
import { IHoverColor } from '../../../../types'

export const NavigationLink = styled(animated.div)`
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.$hovercolor};
  }
`}
`
