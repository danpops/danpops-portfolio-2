import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { IColors, toggleTheme } from '../redux/themeSlice'

export interface IDispatch {
  payload: undefined
  type: string
}
interface IUseTheme {
  theme: IColors
  isDarkTheme: boolean
  toggleColors: () => IDispatch
}

const useTheme = (): IUseTheme => {
  const { theme, isDarkTheme } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const toggleColors = (): IDispatch => dispatch(toggleTheme())

  return { theme, isDarkTheme, toggleColors }
}

export default useTheme
