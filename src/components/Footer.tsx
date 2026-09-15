import { SITE, waLink, DEFAULT_WA_MESSAGE } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h5>bruchez.tech</h5>
            <p>
              Impressão 3D sob medida em {SITE.city}. Bonecos, estátuas,
              capas de bateria, peças automotivas, chaveiros e projetos
              personalizados.
            </p>
            <div className="footer-social">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.02-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16Zm0 5.13a4.71 4.71 0 1 0 0 9.42 4.71 4.71 0 0 0 0-9.42Zm0 7.77a3.06 3.06 0 1 1 0-6.12 3.06 3.06 0 0 1 0 6.12Zm4.9-7.96a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
                </svg>
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.5C16.5 3.44 15.6 3.35 14.5 3.35c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.3v3.3h2.8V22h3.4Z" />
                </svg>
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 2h-3.2v13.3c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .6.05.86.13V9.5a5.9 5.9 0 0 0-.86-.06A5.9 5.9 0 0 0 4.8 15.3a5.9 5.9 0 0 0 5.9 5.9 5.9 5.9 0 0 0 5.9-5.9V8.4a8 8 0 0 0 4.6 1.46V6.66A4.85 4.85 0 0 1 16.6 2Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navegação</h5>
            <ul>
              <li><a href="#categorias">Categorias</a></li>
              <li><a href="#processo">Como funciona</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#videos">Vídeos</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +55 48 99830-1531
                </a>
              </li>
              <li><p>{SITE.city}</p></li>
              <li><p>Atendimento sob encomenda</p></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} bruchez.tech — todos os direitos reservados</span>
          <span>feito com impressão 3D e café</span>
        </div>

        <div className="footer-dev-credit">
          <span>
            &copy; Desenvolvido por{" "}
            <a href="https://bruchez.dev/" target="_blank" rel="noopener noreferrer">
              Leonardo Bruchez
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
