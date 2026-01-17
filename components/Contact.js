import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Not yet working!`);
    setName("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div id="contact" className={styles.contactSection}>
      <h2 className={styles.heading}>
        Every great project starts with a <span>conversation</span>.  
      </h2>
      <h2 className={styles.heading}>
        Let’s create something amazing <span>together!</span>
      </h2>
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        Get in Touch
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} onClick={() => setIsOpen(false)}>
        <div className={`${styles.popup} ${isOpen ? styles.showPopup : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/adityaa.970/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/aditya9738/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://x.com/Aditya9738" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
          
          <a href="mailto:adityagond209@gmail.com" className={styles.email}>
            adityagond209@gmail.com
          </a>
          <div className={styles.or}>or</div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className={styles.input}
            />
            <textarea 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className={styles.textarea}
            />
            <button type="submit" className={styles.sendButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
