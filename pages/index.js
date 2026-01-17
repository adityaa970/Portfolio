import Head from "next/head";
import styles from "../styles/index.module.css";
import Showcase from "../components/Showcase";
import Projects from "../components/Projects.js";
import TechStack from "../components/TechStack.js";
import AboutMe from "../components/AboutMe.js";
import Contact from "../components/Contact.js";
import AvatarWithEyeTracking from "../components/AvatarWithEyeTracking .js";
import { motion } from "framer-motion"; 
import MovingBanner from '../components/MovingBanner';
import CertificationsSlider from "../components/CertificationsSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aditya - Portfolio</title>
        <meta
          name="description"
          content="Aditya - FullStack Developer Portfolio. Showcasing projects, tech stack, and contact information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Aditya | FullStack Developer" />
        <meta
          property="og:description"
          content="Check out my portfolio featuring projects, tech stack, and more!"
        />
        <meta property="og:image" content="/me.png" />
        <meta property="og:url" content="https://aditya18.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditya | FullStack Developer" />
        <meta
          name="twitter:description"
          content="Explore my portfolio and projects!"
        />
        <meta name="twitter:image" content="/me.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        className={styles.firstSection}
        src="/firstbg.avif"
        alt="Background"
      />

      <div className={styles.mainContent}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.heroContainer}>
            <AnimatedText text="Hi, I'm" className={styles.heroIntro} />

            <AnimatedText text="Aditya" className={styles.hero} />
          </div>
        </div>

        <AvatarWithEyeTracking/>

        <div className={styles.portfolioText}>
          <AnimatedText text="Welcome" className={styles.largeText} />
          <AnimatedText text="To My" className={styles.mediumText} />
          <AnimatedText text="Portfolio" className={styles.smallText} />
        </div>

        <div className={styles.fullstackText}>
          <AnimatedText text="FullStack" className={styles.largeText} />
          <AnimatedText text="Developer" className={styles.mediumText} />
        </div>

        <Showcase />
        <Projects visibleCount={4} />
        <TechStack />
        <MovingBanner/>
        <AboutMe />
        <CertificationsSlider/> 
        <Contact />
      </div>
    </div>
  );
}

const AnimatedText = ({ text, className }) => {
  return (
    <motion.div className={className}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className={styles.animatedLetter}
          style={{ display: "inline-block", margin: "0 2px" }}
          animate={{ scaleX: 1, scaleY: 1 }} 
          onHoverStart={(e, info) => {
            e.target.animate(
              [
                { transform: "scaleX(1) scaleY(1)" },
                { transform: "scaleX(1.3) scaleY(0.7)" },
                { transform: "scaleX(0.8) scaleY(1.4)" },
                { transform: "scaleX(1.2) scaleY(0.9)" },
                { transform: "scaleX(1) scaleY(1)" },
              ],
              { duration: 600, easing: "ease-in-out" }
            );
          }}
          onTap={(e, info) => {
            e.target.animate(
              [
                { transform: "scaleX(1) scaleY(1)" },
                { transform: "scaleX(1.3) scaleY(0.7)" },
                { transform: "scaleX(0.8) scaleY(1.4)" },
                { transform: "scaleX(1.2) scaleY(0.9)" },
                { transform: "scaleX(1) scaleY(1)" },
              ],
              { duration: 500, easing: "ease-in-out" }
            );
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
