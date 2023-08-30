import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globals'
import { theme } from './styles/theme'
import { Home } from './pages/home'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { AppRoutes } from './routes'


function App() {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppRoutes></AppRoutes>
      </ThemeProvider>

  
  )
}

export default App
