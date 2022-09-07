import useBoopAnimation from '../../hooks/useBoopAnimation'
import { ICustomButton } from '../../types'
import { PrimaryButton } from './styles'

const CustomButton = ({
  color,
  bgColor,
  label
}: ICustomButton): JSX.Element => {
  const animatedProps = useBoopAnimation()

  return (
    <PrimaryButton color={color} bgColor={bgColor} {...animatedProps}>
      {label}
    </PrimaryButton>
  )
}

export default CustomButton
