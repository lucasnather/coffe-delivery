import { BrowserRouter } from 'react-router-dom'
import { Router } from './Route/router'
import { GlobalStyle } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
