import Link from "next/link";
import { Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2 className="footer-title">Aditya</h2>
          <p className="footer-text">
            from India. I&apos;m currently pursuing a BCA in Software Engineering at Mangalmay, Greater Noida.
          </p>
          <div className="footer-icons">
            <Link href="https://www.linkedin.com/in/aditya9738/" target="_blank"><Linkedin className="icon" /></Link>
            <Link href="https://www.instagram.com/adityaa.970/" target="_blank"><Instagram className="icon" /></Link>
            <Link href="https://x.com/Aditya9738" target="_blank"><Twitter className="icon" /></Link>
            <Link href="mailto:adityagond209@gmail.com" target="_blank"><Mail className="icon" /></Link>
          </div>
        </div>

        <div className="footer-middle">
          <div>
            <h3 className="footer-heading">General</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li>
                <a
                  href="https://raw.githubusercontent.com/aditya9738d/codewings_files/main/Aditya%20Gond%20resume.pdf"
                  download="Aditya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/links">Links</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">My Projects</h3>
            <ul className="footer-links">
              <li><Link href="https://www.codewing.in/">CodeWing</Link></li>
              <li><Link href="https://moodymovie.vercel.app/">MoodyMovie</Link></li>
              <li><Link href="https://codewingss.vercel.app/play.html">Infinite Tic-Tac-Toe</Link></li>
              <li><Link href="https://tunehivee.vercel.app/">TuneHive</Link></li>
              <li><Link href="Projects">More</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Reach Out</h3>
          <p className="footer-text">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          <Link href="mailto:adityagond209@gmail.com" className="footer-email">
            <Mail className="icon" /> adityagond209@gmail.com
          </Link>
        </div>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Aditya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
