import { services, servicesSection } from '../config/site'

export function Services() {
  return (
    <section className="section section--filled" id="servicios">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">{servicesSection.title}</h2>
          <span className="section__numeral">{servicesSection.numeral}</span>
        </div>

        <div className="services">
          {services.map((service) => (
            <article className="service" key={service.title}>
              <span className="service__numeral">{service.numeral}</span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}