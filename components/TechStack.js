import { useEffect, useRef, useState  } from "react";
import styles from "../styles/TechStack.module.css";
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinux, FaJava, FaGithub
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiFirebase, SiTailwindcss, SiTypescript, SiVercel, SiMysql } from "react-icons/si";

export default function TechStack() {
  const technologies = [
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
    { name: "MySQL", icon: <SiMysql className={styles.techIcon} /> }
  ];

  const [rotation, setRotation] = useState(0);
  const techRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.05); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(styles.fadeIn);
            }, index * 100);
          } else {
            entry.target.classList.remove(styles.fadeIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    techRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      techRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.techStack}>
    <img
      className={styles.image}
      src="bg1.png"
      alt="Background"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
      <h5 className={styles.ProjectHeading}>constantly try to improve</h5>
      <h2 className={styles.heading}>Tech Stack</h2>
      <div className={styles.techGrid}>
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className={`${styles.techItem}`} 
            ref={(el) => (techRefs.current[index] = el)}
          >
            {tech.icon}
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
