import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IColors, toggleTheme } from '../redux/themeSlice'

export interface IToggleColors {
  payload: undefined
  type: string
}
interface IUseTheme {
  theme: IColors
  isDarkMode: boolean
  toggleColors: () => IToggleColors
}

const useTheme = (): IUseTheme => {
  const { theme, isDarkMode } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const toggleColors = (): IToggleColors => dispatch(toggleTheme())

  return { theme, isDarkMode, toggleColors }
}

export default useTheme
