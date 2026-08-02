import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}