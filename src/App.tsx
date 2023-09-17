import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function changeTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
