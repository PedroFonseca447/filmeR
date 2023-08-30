import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globals'
import { theme } from './styles/theme'
import { Home } from './pages/home'
import { Header } from './components/Header'
import { Button } from './components/Button'


function App() {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Home></Home>
        <Header></Header>
      </ThemeProvider>

  
  )
}

export default App
