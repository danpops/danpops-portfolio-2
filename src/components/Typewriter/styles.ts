import styled from 'styled-components'

export const TypewriterText = styled.div`
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  &::after {
    content: '|';
    animation: blink 0.8s infinite;
  }
`
