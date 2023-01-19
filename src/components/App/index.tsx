import AppRoutes from '../../router/AppRoutes'
import GlobalStyles from './global'
import ModalProvider from '../../provider/ModalProvider'

const App = () => {
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
