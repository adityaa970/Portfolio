import styles from "../styles/MoreAboutMe.module.css";
import Link from 'next/link'; 
import { FaArrowRight } from "react-icons/fa";

export default function MoreAboutMe() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.Container}>
        <div>
          <h2 className={styles.heading}>About Me</h2>
          <h2 className={styles.mainheading}>Full-Stack Developer and</h2>
          <h2 className={styles.mainheading}>a little bit of <span>everything</span></h2>
          <p className={styles.bio}>
            I am a passionate and versatile software developer with experience in front-end, back-end, and full-stack development. Beyond coding, I have a strong skill set in graphic design, video editing, SEO, and more. My expertise spans multiple domains, allowing me to create not just functional but visually appealing and optimized digital solutions. I love taking on new challenges and continuously expanding my knowledge to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
        <div className={styles.me}>
          <img src="/me1.jpg" alt="A picture of me" />
        </div>
      </div>

      {/* Link component for navigation */}
      <Link href="/about" className={styles.more}>
        <>Learn more about me <FaArrowRight /></>
      </Link>
    </div>
  );
}
