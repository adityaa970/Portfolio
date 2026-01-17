import { useEffect, useState } from "react";
import styles from "../styles/ScrollBar.module.css"; 

const CustomScrollBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollTrack}>
      <div className={styles.scrollThumb} style={{ height: `${scrollHeight}%` }} />
    </div>
  );
};

export default CustomScrollBar;
