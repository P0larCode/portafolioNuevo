import { useState } from 'react'
import { brand, navLinks } from '../config/site'
import { ThemeToggle } from './ThemeToggle'
import { IconClose, IconMenu } from './Icons'

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top">
          {brand.name}
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li className="nav__item" key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}

          <li className="nav__item">
            <a className="nav__cta" href="#contacto">
              Contáctame
            </a>
          </li>

          <li>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </li>

          <li>
            <button
              type="button"
              className="nav__burger"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="nav__panel">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" onClick={() => setOpen(false)}>
              Contáctame
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}