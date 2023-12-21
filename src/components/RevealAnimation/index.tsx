import React from 'react'
import { animated, useInView, useSpring } from 'react-spring'

interface IReveal {
  children: React.ReactNode
}

export default function RevealAnimation (props: IReveal): JSX.Element {
  const [ref, isInView] = useInView({
    rootMargin: '60% 0px 60% 0px',
    amount: buildInteractionObserverThreshold()
  })
  const styles = useSpring({
    scale: isInView ? 1 : 0.05,
    config: { tension: 50 }
  })
  return (
    <animated.div ref={ref} style={styles}>
      {props.children}
    </animated.div>
  )
}

function buildInteractionObserverThreshold (count = 100): number[] {
  const threshold = []
  const parts = 1 / count
  for (let i = 0; i <= count; i++) {
    threshold.push(parseFloat((parts * i).toFixed(2)))
  }
  return threshold
}
