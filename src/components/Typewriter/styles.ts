import styled from 'styled-components'
import devices from '../../utils/devices'
import { Header3 } from '../Text'

interface ITypedText {
  color: string
  cursorColor: string
}

export const TypewriterText = styled(Header3)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  align-self: start;
  font-size: 1.53rem;
  text-align: start;

  @media ${devices.md} {
    font-size: 2rem;
  }
`

export const CustomTWText = styled.p`
  text-align: start;
  overflow: hidden;
  color: ${({ color }) => color};
`

export const CustomTWTypedText = styled.p`
  padding: 0 0.5rem;
  text-align: start;
  overflow: hidden;
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ color, cursorColor }: ITypedText) => `
    color: ${color};

    &::after {
      content: '|';
      color: ${cursorColor};
      animation: blink 1s infinite;
    }
  `}
`
