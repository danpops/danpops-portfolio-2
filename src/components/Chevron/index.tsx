import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IChevron } from '../../types'

export function Chevron (props: IChevron): JSX.Element {
  const { expanded, color } = props
  const style = { size: 25, color }
  return expanded ? <FiChevronUp {...style} /> : <FiChevronDown {...style} />
}
