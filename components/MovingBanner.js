import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaLinux, FaJava, FaGithub, FaJs, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss, SiTypescript, SiVercel, SiMysql } from 'react-icons/si';
import styles from '../styles/MovingBanner.module.css';

const techStack = [
  { name: "React", icon: <FaReact className={styles.techIcon} /> },
  { name: "Next.js", icon: <SiNextdotjs className={styles.techIcon} /> },
  { name: "Node.js", icon: <FaNodeJs className={styles.techIcon} /> },
  { name: "MongoDB", icon: <SiMongodb className={styles.techIcon} /> },
  { name: "Firebase", icon: <SiFirebase className={styles.techIcon} /> },
  { name: "Tailwind", icon: <SiTailwindcss className={styles.techIcon} /> },
  { name: "JavaScript", icon: <FaJs className={styles.techIcon} /> },
  { name: "TypeScript", icon: <SiTypescript className={styles.techIcon} /> },
  { name: "Python", icon: <FaPython className={styles.techIcon} /> },
  { name: "Git", icon: <FaGitAlt className={styles.techIcon} /> },
  { name: "HTML", icon: <FaHtml5 className={styles.techIcon} /> },
  { name: "CSS", icon: <FaCss3Alt className={styles.techIcon} /> },
  { name: "SQL", icon: <FaDatabase className={styles.techIcon} /> },
  { name: "Linux", icon: <FaLinux className={styles.techIcon} /> },
  { name: "Java", icon: <FaJava className={styles.techIcon} /> },
  { name: "Vercel", icon: <SiVercel className={styles.techIcon} /> },
  { name: "GitHub", icon: <FaGithub className={styles.techIcon} /> },
  { name: "MySQL", icon: <SiMysql className={styles.techIcon} /> },
];

const TechBanner = () => {
    return (
      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.bannerContent}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default TechBanner;
