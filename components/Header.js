import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiMessageSquare } from "react-icons/fi"; 
import { FaLink, FaClipboardList } from "react-icons/fa"; 
import styles from "../styles/Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  
  let timeoutId; 

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setMoreOpen(false); 
    }, 200);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); 
    setMoreOpen(true); 
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.logoContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`${styles.logoImage} ${isHovered ? styles.show : ""}`}>
            <img src="/me.png" alt="Portfolio Logo" />
          </div>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
          <Link href="/Projects" className={pathname === "/Projects" ? styles.active : ""}>Projects</Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>

          <div
            className={styles.more}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={pathname.includes("/more") ? styles.active : ""}>More</span>
            {moreOpen && (
              <div
                className={styles.dropdownContainer}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
              >
                <div className={styles.cardsSection}>
                  <Link
                    href="https://raw.githubusercontent.com/aditya9738d/codewings_files/main/Aditya%20Gond%20resume.pdf"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.cardOverlay}>
                      <img src="resume.png" alt="Resume" className={styles.cardImage} />
                      <div className={styles.cardContent}>
                        <h4>Resume</h4>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={styles.linksSection}>
                  <Link href="/links" className={styles.linkItem}>
                    <FaLink className={styles.icon} />
                    <div>
                      <h4>Links</h4>
                      <p>All my links are here</p>
                    </div>
                  </Link>
                  <Link href="#contact" className={styles.linkItem}>
                  <FiMessageSquare className={styles.icon} />
                  <div>
                    <h4>Contact</h4>
                  </div>
                </Link>
                  <Link href="/attribution" className={styles.linkItem}>
                    <FaClipboardList className={styles.icon} />
                    <div>
                      <h4>Attribution</h4>
                      <p>Journey to create this site</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <nav className={`${styles.mobileNav} ${menuOpen ? styles.show : ""}`}>
          <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/Projects" className={pathname === "/Projects" ? styles.active : ""} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""} onClick={() => setMenuOpen(false)}>About</Link>

          <div className={styles.mobileMoreList}>
            <Link href="/Resume" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link href="/links" onClick={() => setMenuOpen(false)}>Links</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/attribution" onClick={() => setMenuOpen(false)}>Attribution</Link>
          </div>
        </nav>
      </header>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Header;
