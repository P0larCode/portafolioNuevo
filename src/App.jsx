import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useTheme } from './hooks/useTheme'
import { Services } from './components/Services'
import { About } from './components/About'
import {Skills} from './components/Skills'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills/>
        <About/>
      </main>
    </>
  )
}