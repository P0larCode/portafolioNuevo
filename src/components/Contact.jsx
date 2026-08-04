import {contact, hero} from '../config/site'

export function Contact (){
    return (
        <section className="contact" id="contacto">
            <div className="container">
                <p className="kicker">{contact.kicker}</p>
                <h2 className="contact__title">{contact.title}</h2>
                <p className="contact__description">{contact.description}</p>


                <div className="actions">
                    <a className="btn btn--solid" href={`mailto:${contact.email}`}>
                        Enviar Correo
                    </a>

                    <a className="btn btn--outline" href={hero.cvUrl}>
                        Descargar CV
                    </a>
                     </div>

                    <a className="contact__email" href={`mailto:${contact.email}`}>
                        {contact.email}
                    </a>

               
            </div>
        </section>
    )
}