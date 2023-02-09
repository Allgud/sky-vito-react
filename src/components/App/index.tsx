import AppRoutes from '../../router/AppRoutes'
import GlobalStyles from './global'
import ModalProvider from '../../provider/ModalProvider'
import { useEffect } from "react"
import { getAllAds } from "../../store/slices/adsSlice"
import { checkIsAuth, getCurrentUser } from "../../store/slices/userSlice"
import { useAppDispatch } from '../../hooks/useAppDispatch'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkIsAuth())
    }
    dispatch(getAllAds())
    dispatch(getCurrentUser())
  }, [])

  return (
    <>
      <GlobalStyles />
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </>
  )
}

export default App
