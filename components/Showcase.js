import React, { useState, useEffect } from "react";
import styles from "../styles/Showcase.module.css";

const StatsCard = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  const stats = [
    { 
      value: 12, 
      label: "Projects", 
      suffix: "+",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M8 21L8.5 19L10 18.5L8.5 18L8 16L7.5 18L6 18.5L7.5 19L8 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M19 10L19.5 8.5L21 8L19.5 7.5L19 6L18.5 7.5L17 8L18.5 8.5L19 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      value: 500, 
      label: "Users", 
      suffix: "K+",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 21V19C22 18.1385 21.7111 17.3054 21.1781 16.6112C20.6452 15.917 19.8984 15.3934 19.0426 15.1027" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.4192 17.6099 3.94289 18.1449 4.63845C18.6798 5.334 18.9706 6.16917 18.9706 7.035C18.9706 7.90083 18.6798 8.736 18.1449 9.43155C17.6099 10.1271 16.8604 10.6508 16 10.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      value: 15, 
      label: "Certifications", 
      suffix: "",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14L9 17L12 20L15 17L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      value: 3, 
      label: "Years", 
      suffix: "+",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  useEffect(() => {
    // Animate numbers with a more subtle approach
    const duration = 1500;
    const steps = 50;
    const interval = duration / steps;
    
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(current);
          return newValues;
        });
      }, interval);
    });
  }, []);

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={styles.statCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.statIcon}>
              {stat.icon}
            </div>
            <div className={styles.statValue}>
              <span className={styles.number}>{animatedValues[index]}</span>
              <span className={styles.suffix}>{stat.suffix}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
