import {brand, navLinks} from '../config/site'
import {ThemeToggle} from './ThemeToggle'

export function Navbar ({theme, onToggleTheme}){
    return(
        <nav className="nav">
            <div className="nav__inner">
                <a className="nav__logo" href="#top">
                    {brand.name}
                </a>
                <ul className='nav__links'>
                    {navLinks.map((link)=> (
                        <li className="nav__item" key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}

                    <li>
                        <a className="nav__cta" href="#contacto">
                            Contáctame
                        </a>
                    </li>

                    <li>
                        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}