import { hero } from '../config/site'

export function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <p className="kicker">{hero.kicker}</p>

        <h1 className="hero__title">
          {hero.titleBefore} <em>{hero.titleAccent}</em> {hero.titleAfter}
        </h1>

        <p className="hero__description">{hero.description}</p>

        <div className="actions">
          <a className="btn btn--solid" href="#proyectos">
            Ver proyectos ↓
          </a>
          <a className="btn btn--outline" href={hero.cvUrl}>
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  )
}