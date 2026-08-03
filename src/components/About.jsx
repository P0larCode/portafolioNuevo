import {about, brand} from '../config/site'

function withBold(text){
    return text
        .split('**')
        .map((part, i) =>( i % 2 === 1 ? <strong key={i}>{part}</strong>: part))
}


export function About () {
    return(
        <section className="section section--filled" id="sobre-mi">
            <div className="container">
                <div className="section__head">
                    <h2 className="section__title">{about.title}</h2>
                    <span className="section__numeral">{about.numeral}</span>
                </div>

        <div className="about">
            <div className="about__portrait">
                {about.photo ? (
                    <img src={about.photo} alt={`Foto de ${brand.owner}`}/>
                ):(
                    '🚀'
                )}
            </div>

            <div className="about__text">
                <p>{withBold(about.paragraphs[0])}</p>
                <p className="about__quote">{about.quote}</p>
                {about.paragraphs.slice(1).map((p, i)=>(
                    <p key={i}>{withBold(p)}</p>
                ))}
            </div>
        </div>
            </div>
        </section>
    )
}
