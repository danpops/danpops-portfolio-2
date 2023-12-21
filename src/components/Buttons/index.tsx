import useBoopAnimation from '../../hooks/animations/useBoopAnimation'
import { ICustomButton } from '../../types'
import { PrimaryButton } from './styles'

const CustomButton = ({
  color,
  $bgcolor,
  label
}: ICustomButton): JSX.Element => {
  const animatedProps = useBoopAnimation()

  return (
    <PrimaryButton color={color} $bgcolor={$bgcolor} {...animatedProps}>
      {label}
    </PrimaryButton>
  )
}

export default CustomButton
