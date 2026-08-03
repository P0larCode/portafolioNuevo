import {skills, skillsSection} from '../config/site'

export function Skills(){
    return (
        <section className = "section" id="stack">
            <div className="container">
                <div className="section__head">
                    <h2 className="section__title">{skillsSection.title}</h2>
                    <span className="section__numeral">{skillsSection.numeral}</span>
                </div>

                <ul className="skills">
                    {skills.map((skill)=>(
                        <li className="skill" key={skill}>
                            {skill}
                        </li>
                    ))}                    
                    </ul>            
            </div>
        </section>
    )
}