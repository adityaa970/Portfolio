import { FaExternalLinkAlt } from "react-icons/fa";
import "../styles/LinksPage.css";

export default function LinksPage() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya9738", external: true },
    { name: "Telegram", url: "https://t.me/testflight_link", external: true },
  ];

  return (
    <>
      <main className="links-container">
        <h1 className="links-title">Useful Links</h1>
        
        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="link-item"
            >
              {link.name}
              {link.external && <FaExternalLinkAlt className="external-icon" />}
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
