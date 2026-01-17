import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import styles from "../styles/PortfolioProjects.module.css";
import { FaArrowRight } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function PortfolioProjects({ visibleCount = 4 }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorLink, setCursorLink] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectIndex = parseInt(entry.target.dataset.index, 10); 
          
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => [...new Set([...prev, projectIndex])]); 
          } else {
            // Reduce delay and add buffer for fast scrolling
            setTimeout(() => {
              setVisibleProjects((prev) => prev.filter((i) => i !== projectIndex)); 
            }, 100); 
          }
        });
      },
      { 
        threshold: [0, 0.1, 0.2], // Multiple thresholds for better detection
        rootMargin: '50px' // Add margin to detect elements earlier
      } 
    );
  
    // Ensure all project elements are observed
    const observeProjects = () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    };

    // Use a small delay to ensure refs are set
    setTimeout(() => {
      observeProjects();
      // Set initial load to false after observer is set up
      setTimeout(() => setInitialLoad(false), 200);
    }, 100);
  
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [showAllProjects]); // Re-observe when showAllProjects changes
  
  
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const convertToRGBA = (hexOrRGB, opacity) => {
    if (hexOrRGB.startsWith("rgb")) {
      return hexOrRGB.replace(/rgba?\(([^)]+)\)/, (_, values) => {
        return `rgba(${values.split(",").slice(0, 3).join(",")}, ${opacity})`;
      });
    }
    const hex = hexOrRGB.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const lightenColor = (color, percent) => {
    let r, g, b;
    if (color.startsWith("#")) {
      const bigint = parseInt(color.slice(1), 16);
      r = (bigint >> 16) & 255;
      g = (bigint >> 8) & 255;
      b = bigint & 255;
    } else {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return color;
      [, r, g, b] = match.map(Number);
    }
    const increaseBrightness = (value, percent) =>
      Math.min(255, Math.round(value + (255 - value) * (percent / 100)));

    r = increaseBrightness(r, percent);
    g = increaseBrightness(g, percent);
    b = increaseBrightness(b, percent);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const projects = [
          {
        title: "ResumeAI Pro",
        description:
          "ResumeAI Pro is an AI-powered resume builder that helps users create, edit, and export professional resumes with AI-generated bullet points, tailored summaries, job-description analysis, and drag-and-drop ordering.",
        points: [
          "AI-generated, optimized bullet points tailored to specific job descriptions.",
          "Real-time WYSIWYG preview with PDF, TXT, and JSON export options.",
          "Drag-and-drop ordering for sections (experience, education, projects) with instant preview.",
          "Server-side generative AI integration (Google Gemini) for summaries & rewrites.",
          "Form-driven inputs with react-hook-form, plus docx → html import and export.",
        ],
        technologies:
          "Next.js (Next 15), React, Firebase, Google Gemini API, react-pdf, jspdf, framer-motion",
        link: "https://resumeai.codewing.in",
        image: "/resumeai.png",
        bgColor: "#c5e1ed",
        bulletColor: "#c5e1ed",
        overlayText:
          "Create professional resumes with AI assistance, customizable templates, and one-click export. Build your perfect resume in minutes.",
      },
        {
      title: "CodeWing",
      description:
        "CodeWing is a platform that gives Apple users early access to beta apps with advanced features. It lets you explore cutting-edge apps before they officially launch, offering a sneak peek into the future of iOS. Plus, your feedback helps developers refine their apps",
        points: [
          "Leveraged Partial Prerendering and After for faster loading.",
          "Simplified idea submission with a clean, intuitive design.",
          "Enhanced browsing with seamless performance optimization.",
        ],
        technologies: "NextJs, React, Tailwind Css, Firebase, markdown, PostgreSQL, Auth.js, GitHub ",
        link: "https://www.codewing.in/",
        image: "/codewing.in.png",
        bgColor: "#908df6",
        bulletColor: "#007ACC", 
        overlayText: "CodeWing is a platform that gives Apple users early access to beta apps with advanced features...",
      },
      {
        title: "SoulTalk - Anonymous Confessions",
        description:
          "SoulTalk is an anonymous platform where users can share their personal thoughts and confessions in a safe, supportive environment. The platform enables users to post confessions, interact with others via upvotes, downvotes, and comments, and share confessions via easily accessible links.",
        points: [
          "Developed the platform using Next.js and React, enabling fast, dynamic page rendering with server-side capabilities.",
          "Integrated Firebase for real-time database management, storing and managing user posts and interactions.",
          "Designed a content moderation system to ensure confessions adhere to community guidelines.",
        ],
        technologies: "NextJs, React, Firebase, Vercel, CSS Modules",
        link: "https://soultalk.vercel.app/",
        image: "/soultalk.png",
        bgColor: "#8A2BE2",
        bulletColor: "#007ACC", 
        overlayText: "Share your confessions, thoughts, and experiences without fear of judgment.",
      },
      {
        title: "MoodyMovie",
        description: "MoodyMovie is an intelligent movie recommendation platform that helps users discover films based on their current mood. Whether you're feeling happy, sad, adventurous, or nostalgic, MoodyMovie curates personalized movie suggestions tailored to your emotions.",
        link: "https://moodymovie.vercel.app/",
        image: "/moodymovie.png",
        technologies: "NextJs, CSS, TMDB",
        bgColor: "rgba(0, 102, 204, 0.8)",
        bulletColor: "#FF4500",
        points: [
          "Mood-Based Recommendations.",
          "User Reviews & Ratings.",
          "Genre & Custom Filters.",
        ],
        overlayText: "Explore highly-rated films tailored to your current mood.",
      },
      {
        title: "infinite tic-tac-toe",
        description: "Infinite Tic-Tac-Toe is a unique twist on the classic game, played on a 3x3 grid with a rotating move system. Each player can only have 3 active marks at a time—once they place a fourth move, their oldest mark disappears. The goal is still to form a line of three consecutive marks (horizontally, vertically, or diagonally), but the disappearing moves add a strategic challenge. Players must think ahead, as potential winning lines can vanish with each turn, making the game dynamic and unpredictable.",
        link: "https://winxo.vercel.app",
        technologies: "NextJs, Tailwind Css, Firebase",
        image: "/ticTac.png",
        bgColor: "#5AA594",
        bulletColor: "#00FF7F",
        points: [
          "No Draws.",
          "Strategic Gameplay.",
          "Dynamic Board Expansion.",
        ],
        overlayText: "Infinite Moves. One Winner. No Ties!.",
      },
      {
        title: "utilo - Web Utilities",
        description:
          "A lightweight collection of utilo Web Utilities calculators, converters, encoders, and generators built with Next.js and React for quick, accurate results.",
        points: [
          "EMI, SIP, BMI and other fast calculators for everyday use.",
          "Converters: currency, units, timestamps — accurate and mobile-friendly.",
          "Encoders & formatters: Base64, URL, JSON prettify/minify tools.",
          "Generators: QR codes, secure passwords, and simple shareable outputs.",
          "Small, fast, and designed for quick lookups on mobile or desktop.",
        ],
        technologies:
          "Next.js, React, Node.js, CSS Modules + PostCSS, API routes, jsconfig.json, ESLint",
        link: "https://utilo.vercel.app",
        image: "/utilo.png",
        bgColor: "#00d09c",
        bulletColor: "#00d09c",
        overlayText:
          "All-in-one utilo - Web Utilities — calculators, converters, encoders, and tools, powered by Next.js.",
      },
      {
        title: "NetFlix (Clone)",
        description:
          "I’ve built a pixel-perfect Netflix clone using just HTML, CSS, and JavaScript, all within a single file. This project replicates the visual layout and interactive elements of the Netflix homepage with high fidelity, demonstrating strong front-end development skills and meticulous attention to detail.",
        points: [
          "Pixel-perfect design: Carefully matched styling and layout to the original Netflix interface.",
          "All HTML, CSS, and JS code written in one file—clean, efficient, and easy to share or deploy.",
          "Layout adapts to different screen sizes for mobile and desktop.",
          "Built from scratch without using frameworks like React or Bootstrap.",
        ],
        technologies: "HTML, Css, JavaScript",
        link: "https://netflixclomee.vercel.app",
        image: "/netflix.png",
        bgColor: "#d81f26",
        bulletColor: "#d81f26", 
        overlayText: "A pixel-perfect Netflix homepage clone built in a single HTML file using only HTML, CSS, and JavaScript — no libraries or frameworks.",
      },
      {
      title: "TuneHive",
      description: "TuneHive is a free music and playlist downloader that lets users download their favorite songs for offline playback. Whether it's trending hits, personalized playlists, or timeless classics, TuneHive ensures a seamless and unlimited music experience without the need for an internet connection..",
      link: "https://tunehivee.vercel.app/",
      technologies: "NextJs, React, Tailwind Css, FireBase ",
      image: "/tunehivee.png",
      bgColor: "#ad874f",
      bulletColor: "#00FF7F",
      points: [
        "Free Music Downloads.",
        "High-Quality Audio.",
        "Playlist Support .",
      ],
      overlayText: "Download. Play. Vibe. Anytime..",
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of my skills and projects.",
      link: "https://aditya18.vercel.app/",
      technologies: "NextJs, React, Tailwind Css ",
      image: "/Portfolio.png",
      bgColor: "#e60076",
      bulletColor: "#e60076",
      points: [
        "Built with Next.js and TypeScript for performance and scalability.",
      ],
      overlayText: "Portfolio Showcasing Innovative Web Development and UI/UX",
    },
    {
      title: "Linktree alternative",
      description:
        "I've built my own personal Linktree alternative using Next.js and deployed it on Vercel. The site features a clean, responsive design with a dynamic background that adds a modern, interactive touch. It serves as a central hub for all my important links, projects, and social profiles — fully customizable and tailored to my personal style.",
      points: [
        "Built with Next.js for fast performance and modern web practices.",
        "Includes a dynamic background for an engaging visual experience.",
        "Easily extendable with custom components and styles.",
      ],
      technologies: "NextJs, Vercel",
      link: "https://linkfly.vercel.app",
      image: "/linkfly.png",
      bgColor: "#0e461d",
      bulletColor: "#0e461d", 
      overlayText: "A custom Linktree alternative built with Next.js and hosted on Vercel, featuring a dynamic background and a clean, responsive design to showcase my links and projects in style.",
    },
    {
      title: "GoTiny (Under Development)",
      description:
        "GoTiny is a link shortening service that allows users to create short, easily shareable URLs from long links. It offers features like instant redirects, free usage, and the ability to create custom URLs to better tailor links for personal or business needs.",
      points: [
        "Lightning-Fast Redirects.",
        "Completely Free.",
        "Personalize Your Links.",
      ],
      technologies: "NextJs, React, Tailwind Css, Firebase, PostgreSQL, Auth.js ",
      link: "https://gotiny.vercel.app/",
      image: "/gotiny.png",
      bgColor: "#ff5722",
      bulletColor: "#007ACC", 
      overlayText: "GoTiny offers instant redirects, free link shortening, and the ability to create custom, branded URLs.",
    },
  ];

  const isShowingAll = visibleCount >= projects.length;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        let newProjectInView = null;
        projectRefs.current.forEach((ref, index) => {
          if (ref) {
            const { top, bottom } = ref.getBoundingClientRect();
            const threshold = window.innerHeight / 2;
            if (top <= threshold && bottom >= threshold) {
              newProjectInView = index;
            }
          }
        });
        if (newProjectInView !== null) setCurrentProjectIndex(newProjectInView);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]); 
  
  useEffect(() => {
    if (isMobile) {
      setCurrentProjectIndex(0); 
    }
  }, [isMobile]); 
  

  return (
    <div>
    {!isMobile && cursorVisible && (
      <div
        className={styles.cursor}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          cursor: cursorLink ? "pointer" : "default", 
        }}
        onClick={() => {
          console.log("Cursor Clicked", cursorLink);
          if (cursorLink) {
            window.open(cursorLink, "_blank");
          }
        }}
        
      >
        Open Website
      </div>
    )}
    
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        ref={imageRef}
        className={`${styles.image} ${isVisible ? styles.visible : ""}`}
        src="/bg2.png"
        alt="Background"
      />
      <h5 className={styles.Heading}>Featured Projects</h5>
      <h2 className={styles.projectsHeading}>Recent <span>Work</span></h2>
    </div>

      <div className={`${styles.projectsContainer} ${isMobile ? styles.mobileLayout : ""}`}>
        <div className={styles.projectsList}>
          {(showAllProjects ? projects : projects.slice(0, visibleCount)).map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index} 
              className={`${styles.projectBlock} ${visibleProjects.includes(index) ? styles.popUp : styles.hidden}`}
              onMouseEnter={() => {
                setCursorVisible(true);
                setCursorLink(project.link); 
              }}
              onMouseLeave={() => {
                setCursorVisible(false);
                setCursorLink(null);
              }}
              onClick={() => {
                if (!isMobile) {
                  window.open(project.link, "_blank"); 
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.projectImageWrapper}>
                <div
                  style={{
                    background: `linear-gradient(to bottom, 
                      ${convertToRGBA(project.bgColor, 0.05)} 0%, 
                      ${convertToRGBA(project.bgColor, 0.45)} 40%,  
                      ${convertToRGBA(project.bgColor, 0.7)} 75%,  
                      ${convertToRGBA(project.bgColor, 1)} 100%)`,
                    width: "97%",
                    height: "97%",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                <div className={styles.overlayText}
                style={{
                  position: "absolute",
                  top: "10%",
                  width: "80%",
                  color: lightenColor(project.bgColor, 50),
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {project.overlayText}
              </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                    style={{ boxShadow: `0 0 30px ${lightenColor(project.bgColor, 50)}` }}
                  />
                </div>
              </div>

              {isMobile && (
                <div className={styles.projectDetails}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <ul className={styles.projectPoints}>
             
                    {project.points?.map((point, i) => (
                      <li key={i} >
                        <span className={styles.bulletIcon} style={{ color: lightenColor(project.bgColor, 50) }}>
                          <VscDebugBreakpointLog />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                <div className={styles.projectTechnologies}>
                  {project.technologies.split(", ").map((tech, i) => (
                    <span
                      key={i}
                      className={styles.technologyTag}
                      style={{
                        backgroundColor: convertToRGBA(project.bgColor, 0.4),
                        color: lightenColor(project.bgColor, 60),
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.websiteButton}>
                Visit Website
                </a>
                </div>
              )}
            </div>
          ))}
            {!isShowingAll && (
              <Link href="/Projects" className={styles.moreProjectsLink}>
                See More Projects <FaArrowRight />
              </Link>
            )}
        </div>

        {!isMobile && (
          <div className={styles.projectDetailsWrapper}>
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{projects[currentProjectIndex].title}</h3>
              <p className={styles.projectDescription}>{projects[currentProjectIndex].description}</p>
              <ul className={styles.projectPoints}>
                {projects[currentProjectIndex].points?.map((point, i) => (
                  <li key={i}>
                    <span className={styles.bulletIcon} style={{ color: projects[currentProjectIndex].bgColor }}>
                      <VscDebugBreakpointLog />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            <div className={styles.projectTechnologies}>
              {projects[currentProjectIndex].technologies.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className={styles.technologyTag}
                  style={{
                    backgroundColor: convertToRGBA(projects[currentProjectIndex].bgColor, 0.4),
                    color: lightenColor(projects[currentProjectIndex].bgColor, 60),
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
