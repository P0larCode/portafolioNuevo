import { brand, socials } from '../config/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {new Date().getFullYear()} {brand.name} · {brand.owner}
        </span>

        <span>
          {socials
            .filter((social) => social.url)
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
        </span>
      </div>
    </footer>
  )
}