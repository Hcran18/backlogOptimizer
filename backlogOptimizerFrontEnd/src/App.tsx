import Optimizer from './pages/optimizer'
import './App.css'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Optimizer />
      </ThemeProvider>
    </>
  )
}

export default App
