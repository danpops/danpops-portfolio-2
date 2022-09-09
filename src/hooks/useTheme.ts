import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IColors, toggleTheme } from '../redux/themeSlice'

export interface IToggleColors {
  payload: undefined
  type: string
}
interface IUseTheme {
  theme: IColors
  isDarkTheme: boolean
  toggleColors: () => IToggleColors
}

const useTheme = (): IUseTheme => {
  const { theme, isDarkTheme } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const toggleColors = (): IToggleColors => dispatch(toggleTheme())

  return { theme, isDarkTheme, toggleColors }
}

export default useTheme
