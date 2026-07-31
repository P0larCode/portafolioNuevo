import {ThemeToggle} from './components/ThemeToggle'
import {useTheme} from './hooks/useTheme'

export default function App(){

  const {theme, toggleTheme} = useTheme()

  return (
  <main>
    <ThemeToggle theme={theme} onToggle={toggleTheme} />
    <h1>Hola, soy César</h1>
  </main>
  )
}