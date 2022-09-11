import { useState, useEffect } from 'react'
import { ITypewriterIndex, IUseTypewriterProps } from '../types'

function fetchTimerIndex ({ timer, content }: ITypewriterIndex) {
  return (index: number) => {
    if (index >= content.length - 1) {
      clearInterval(timer)
      return index
    }
    return index + 1
  }
}

const useTypewriter = ({ content, speed }: IUseTypewriterProps): string => {
  const [displayedContent, setDisplayedContent] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex(fetchTimerIndex({ timer: animKey, content }))
    }, speed)
  }, [speed, content])

  useEffect(() => {
    function composeContentCharacter (displayed: string): string {
      return displayed + content[index]
    }

    setDisplayedContent(composeContentCharacter)
  }, [index, content])

  return displayedContent
}

export default useTypewriter
