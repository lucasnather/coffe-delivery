import { BrowserRouter } from 'react-router-dom'
import { Router } from './Route/router'
import { GlobalStyle } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/defaultTheme'
import { CoffeeProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
