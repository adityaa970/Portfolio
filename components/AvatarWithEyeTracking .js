import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/index.module.css";

export default function AvatarWithEyeTracking() {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const avatarRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      if (!avatarRef.current) return;

      const rect = avatarRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (event.clientX - centerX) / (rect.width / 2);
      const deltaY = (event.clientY - centerY) / (rect.height / 2);

      const maxX = 10; 
      const maxY = 10;  

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPupilPosition({
          x: Math.max(-maxX, Math.min(deltaX * maxX, maxX)), 
          y: Math.max(-maxY, Math.min(deltaY * maxY, maxY)), 
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      className={styles.characterContainer}
      ref={avatarRef}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <img src="/me_eyewhite.png" className={styles.whiteEye} />

      <motion.img
        src="/me_eyeball.png"
        className={styles.eyes}
        animate={{ x: pupilPosition.x, y: pupilPosition.y }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      />

      <img className={styles.character} src="/me_face.png" alt="Avatar" />
    </motion.div>
  );
}
