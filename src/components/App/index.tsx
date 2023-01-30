import AppRoutes from '../../router/AppRoutes'
import GlobalStyles from './global'
import ModalProvider from '../../provider/ModalProvider'
import { Provider } from 'react-redux'
import store from '../../store'

const App = () => {

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </Provider>
  )
}

export default App
