import { IconMoon, IconSun } from './Icons'

export function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {isLight ? <IconMoon /> : <IconSun />}
    </button>
  )
}