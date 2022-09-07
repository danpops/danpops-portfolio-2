import { Link } from 'react-scroll'
import styled from 'styled-components'
import { IHoverColor } from '../../../../types'

export const NavigationMobileItem = styled.div`
  padding: 1rem 0.8rem;
  font-size: 16px;
  display: block;
  margin-left: 2rem;
  font-weight: 700;
  cursor: pointer;

  ${(props: IHoverColor) => `
    color: ${props.color};
    &:hover {
      color: ${props.hoverColor};
    }
  `}
`

export const NavigationLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`
