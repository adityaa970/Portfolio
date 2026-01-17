import { useEffect, useState } from "react";
import styles from "../styles/MoreAboutMe1.module.css";
import MovingBanner from '../components/MovingBanner';


export default function MoreAboutMe() {
  const [scrollProgressSection1, setScrollProgressSection1] = useState(0);
  const [scrollProgressSection2, setScrollProgressSection2] = useState(0);
  const [scrollProgressSection3, setScrollProgressSection3] = useState(0);
  const sensitivityFactor = 1;
  const endOffset = 650;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const button = e.target;
    const { top, left, width, height } = button.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    button.style.transform = `translate(${deltaX / 15}px, ${deltaY / 15}px)`;
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    const button = document.querySelector(`.${styles.button}`);
    if (button) {
      button.style.transform = "translate(0, 0)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");
      const section3 = document.getElementById("section3");

      if (!section1 || !section2 || !section3) return;

      const section1Top = section1.offsetTop;
      const section1Height = section1.offsetHeight;
      const section2Top = section2.offsetTop;
      const section2Height = section2.offsetHeight;
      const section3Top = section3.offsetTop;
      const section3Height = section3.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const startFillSection1 = section1Top - windowHeight * 0;
      const endFillSection1 =
        section1Top + section1Height - windowHeight + endOffset;

      const startFillSection2 = section2Top - windowHeight * 0;
      const endFillSection2 =
        section2Top + section2Height - windowHeight + endOffset;
        
      const startFillSection3 = section3Top - windowHeight * 0;
      const endFillSection3 =
        section3Top + section3Height - windowHeight + endOffset;
        
      if (scrollY >= startFillSection1 && scrollY <= endFillSection1) {
        const progressSection1 =
          (((scrollY - startFillSection1) /
            (endFillSection1 - startFillSection1)) *
            100) /
          sensitivityFactor;
        setScrollProgressSection1(Math.min(Math.max(progressSection1, 0), 100));
      } else if (scrollY < startFillSection1) {
        setScrollProgressSection1(0);
      } else if (scrollY > endFillSection1) {
        setScrollProgressSection1(100);
      }

      if (scrollProgressSection1 === 100) {
        if (scrollY >= startFillSection2 && scrollY <= endFillSection2) {
          const progressSection2 =
            (((scrollY - startFillSection2) /
              (endFillSection2 - startFillSection2)) *
              100) /
            sensitivityFactor;
          setScrollProgressSection2(
            Math.min(Math.max(progressSection2, 0), 100)
          );
        } else if (scrollY < startFillSection2) {
          setScrollProgressSection2(0);
        } else if (scrollY > endFillSection2) {
          setScrollProgressSection2(100);
        }
      }

      if (scrollProgressSection2 === 100) {
        if (scrollY >= startFillSection3 && scrollY <= endFillSection3) {
          const progressSection3 =
            (((scrollY - startFillSection3) /
              (endFillSection3 - startFillSection3)) *
              100) /
            sensitivityFactor;
          setScrollProgressSection3(
            Math.min(Math.max(progressSection3, 0), 100)
          );
        } else if (scrollY < startFillSection3) {
          setScrollProgressSection3(0);
        } else if (scrollY > endFillSection3) {
          setScrollProgressSection3(100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgressSection1, scrollProgressSection2]);

  return (
    <div>
      <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Me</h2>
      <h2 className={styles.mainheading}>
      Hi there! I&apos;m <span>Aditya</span>
      </h2>
      <p className={styles.bio}>
      I am a passionate and versatile software developer with experience in
      front-end, back-end, and full-stack development. Beyond coding, I have
      a strong skill set in graphic design, video editing, SEO, and more. My
      expertise spans multiple domains, allowing me to create not just
      functional but visually appealing and optimized digital solutions. I
      love taking on new challenges and continuously expanding my knowledge
      to stay ahead in the ever-evolving tech landscape.
      </p>
      </div>
      <MovingBanner />

      <div className={styles.pageContainer} id="experience-section">
        <div className={styles.content}>
          <div className={styles.experienceContainer}>
            <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
              <h2 className={styles.heading}>The Experience</h2>
              <h2 className={styles.mainheading}>Making Ideas Tangible</h2>
              <h2 className={styles.mainheading}>
                Through <span>Experience.</span>
              </h2>
            </div>

            <div id="section1" className={styles.section}>
              <div className={styles.SectionHeading}>
                <span></span>Education
              </div>
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  <div
                    className={styles.timelineProgress}
                    style={{ height: `${scrollProgressSection1}%` }}
                  />
                </div>
              </div>
              {[
                {
                  date: "JUN 2023 - CURRENT",
                  title: "Bachelor of Computer Applications (BCA)",
                  company: "Mangalmay Group of Institutions",
                  location: "Greater Noida",
                  description:
                    "Currently pursuing BCA at Mangalmay Group of Institutions. Gaining expertise in programming, web development, and software applications while building strong problem-solving and analytical skills.",
                  images: ["/mangalmay.jpeg"],
                },
                {
                  date: "JAN 20.. - MAR 2023",
                  title: "CBSE Boards",
                  description:
                    "Completed my 12th grade with a focus on Science, specializing in Physics, Chemistry, and Mathematics (PCM). This laid the foundation for my interest in technology and computer science.",
                  images: ["/scool2.jpg"],
                },
              ].map((exp, index) => (
                <div key={index} className={styles.container}>
                  <div className={styles.bulletPoint} />
                  <div className={styles.experienceItem}>
                    <div className={styles.experienceItemContainer}>
                      <div className={styles.experienceItemSticky}>
                        <span className={styles.date}>{exp.date}</span>
                        <h3 className={styles.title}>{exp.title}</h3>
                        <p className={styles.company}>{exp.company}</p>
                        {exp.location && <p className={styles.location}>{exp.location}</p>}
                      </div>
                      <div>
                      {exp.description && <p className={styles.description}>{exp.description}</p>}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className={styles.skills}>
                          {exp.skills.map((skill, i) => (
                            <span key={i}>{skill}</span>
                          ))}
                        </div>
                      )}
                      

                      {exp.images && exp.images.length > 0 && (
                        <div className={styles.images}>
                          {exp.images.map((img, i) => (
                            <img key={i} src={img} alt={`Experience ${i + 1}`} />
                          ))}
                        </div>
                      )}
                      
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="section2" className={styles.section}>
              <div className={styles.SectionHeading}>
                <span></span>Experience
              </div>
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  <div
                    className={styles.timelineProgress}
                    style={{ height: `${scrollProgressSection2}%` }}
                  />
                </div>
              </div>
              {[
                {
                  date: "Jun 2024 - Sep 2025",
                  title: "Full Stack Development Intern",
                  company: "Tech Company",
                  location: "Remote/Hybrid",
                  description:
                    "Completed a comprehensive full-stack development internship focusing on modern web technologies and practical project implementation. Gained hands-on experience in both frontend and backend development while working on real-world applications.",
                  skills: [
                    "React",
                    "Node.js",
                    "JavaScript",
                    "HTML/CSS",
                    "Database Management",
                    "API Development",
                    "Version Control (Git)"
                  ],
                  responsibilities: [
                    "Developed responsive web applications using React and modern JavaScript frameworks",
                    "Built RESTful APIs and integrated backend services with frontend components",
                    "Collaborated on database design and optimization for improved application performance",
                    "Participated in code reviews and implemented best practices for clean, maintainable code",
                    "Worked with version control systems and agile development methodologies"
                  ],
                  images: ["/internship-cert.jpg"]
                }
              ].map((exp, index) => (
                <div key={index} className={styles.container}>
                  <div className={styles.bulletPoint} />
                  <div className={styles.experienceItem}>
                    <div className={styles.experienceItemContainer}>
                      <div className={styles.experienceItemSticky}>
                        <span className={styles.date}>{exp.date}</span>
                        <h3 className={styles.title}>{exp.title}</h3>
                        <p className={styles.company}>{exp.company}</p>
                        {exp.location && <p className={styles.location}>{exp.location}</p>}
                      </div>
                      <div>
                        {exp.description && <p className={styles.description}>{exp.description}</p>}

                        {exp.responsibilities && (
                          <ul className={styles.responsibilities}>
                            {exp.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        )}

                        {exp.images && exp.images.length > 0 && (
                          <div className={styles.images}>
                            {exp.images.map((img, i) => (
                              <img key={i} src={img} alt={`Experience ${i + 1}`} />
                            ))}
                          </div>
                        )}
                        
                        {exp.skills && exp.skills.length > 0 && (
                          <div className={styles.skills}>
                            {exp.skills.map((skill, i) => (
                              <span key={i}>{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div id="section3" className={styles.section}>
              <div className={styles.SectionHeading}>
                <span></span>Projects
              </div>
              <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                  <div
                    className={styles.timelineProgress}
                    style={{ height: `${scrollProgressSection3}%` }}
                  />
                </div>
              </div>
              {[
                {
                  "date": "Mar 2025 - Mar 2025",
                  "title": "SoulTalk - Anonymous Confessions",
                  "company": "Personal Project",
                  "description": 
                    "SoulTalk is an anonymous platform where users can share their personal thoughts and confessions in a safe, supportive environment. The platform enables users to post confessions, interact with others via upvotes, downvotes, and comments, and share confessions via easily accessible links.",
                  "skills": [
                    "Next.js",
                    "React",
                    "Firebase",
                    "Vercel",
                    "CSS Modules",
                    "Date-fns",
                    "React Icons"
                  ],
                  "responsibilities": [
                    "Developed the platform using Next.js and React, enabling fast, dynamic page rendering with server-side capabilities.",
                    "Integrated Firebase for real-time database management, storing and managing user posts and interactions.",
                    "Designed a content moderation system to ensure confessions adhere to community guidelines.",
                    "Created a smooth user experience with upvote/downvote systems and comment features for enhanced engagement.",
                    "Built share functionality allowing users to easily copy and share confession URLs.",
                    "Ensured responsiveness and scalability through Vercel deployment, maintaining fast load times and stable performance across all devices."
                  ],
                  "images": ["/soultalk.png", "/soultalk1.png"]
                },                
                {
                  date: "MAR 2025 - CURRENT",
                  title: "GoTiny - Link Shortener",
                  company: "Personal Project",
                  description: 
                    "GoTiny is a web-based link shortener that allows users to create, manage, and share shortened URLs. The project includes custom aliases, domain support, and API integration. It offers a sleek UI for generating and managing short links. The core functionality is operational, and further enhancements are in progress.",
                  responsibilities: [
                    "Developed the full-stack architecture using Next.js and Firebase.",
                    "Implemented custom domain support and alias creation.",
                    "Integrated Firestore for link storage and efficient retrieval.",
                    "Deployed and managed the project using Vercel."
                  ],
                  skills: [
                    "Next.js",
                    "Vercel",
                    "Firestore",
                    "Tailwind CSS",
                    "API Integration"
                  ],
                  images: ["/gotiny.png", "/gotiny2.png"],
                  links: [
                    { name: "Live Demo", url: "https://gotiny.vercel.app" },
                    { name: "GitHub Repo", url: "https://github.com/yourusername/gotiny" }
                  ]
              },                        
              {
                date: "Jan 2024 - CURRENT",
                title: "CodeWing – Beta apps",
                company: "Personal Project",
                description: 
                  "CodeWing is a web platform designed to host and distribute Apple apps, providing easy access to TestFlight beta apps and invitation codes. The platform features over 10,000 dynamic pages, each dedicated to a different app, and includes Amazon affiliate banners for monetization.",
                skills: [
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Firebase",
                  "Vercel"
                ],
                responsibilities: [
                  "Built a scalable web platform using Next.js and React, ensuring fast page rendering and efficient routing.",
                  "Integrated Firestore for dynamic content management with over 10,000 app pages.",
                  "Implemented custom Amazon affiliate banners to generate passive income.",
                  "Optimized SEO for better search engine visibility, improving organic traffic.",
                  "Ensured mobile responsiveness and cross-browser compatibility.",
                  "Continuously add new features and optimize performance through occasional updates."
                ],
                images: ["/codewing.in.png", "/codewing2.png"]
            },         
            {
              date: "Nov 2023 - Dec 2023",
              title: "Moody Movie",
              company: "Personal Project",
              description: 
                "Moody Movie is a web platform that recommends movies based on the user's current mood. It uses the TMDB API to fetch movie data and presents personalized suggestions. The platform offers a sleek, user-friendly interface with dynamic loading and responsive design.",
              skills: [
                "Next.js",
                "React",
                "TMDB API",
                "Tailwind CSS",
                "Vercel"
              ],
              responsibilities: [
                "Developed a full-stack web application using Next.js and React.",
                "Integrated the TMDB API to fetch and display dynamic movie data.",
                "Implemented a mood-based filtering system for personalized movie recommendations.",
                "Designed an intuitive, responsive UI with Tailwind CSS.",
                "Optimized API calls and data caching to improve performance.",
                "Deployed the website on Vercel with CI/CD for seamless updates."
              ],
              images: ["/moodymovie1.png", "/moodymovie2.png"]
          },             
          {
            date: "Aug 2023 - Sep 2023",
            title: "Infinite Tic-Tac-Toe",
            company: "Personal Project",
            description: 
              "Infinite Tic-Tac-Toe is a unique twist on the classic game, played on a 3x3 grid with a rotating move system. Each player can only have 3 active marks at a time—once they place a fourth move, their oldest mark disappears. The goal is still to form a line of three consecutive marks (horizontally, vertically, or diagonally), but the disappearing moves add a strategic challenge. Players must think ahead, as potential winning lines can vanish with each turn, making the game dynamic and unpredictable.",
            skills: [
              "React",
              "JavaScript",
              "Tailwind CSS",
              "AI Integration"
            ],
            responsibilities: [
              "Developed a dynamic, infinite board system using React.",
              "Implemented AI logic for single-player mode with strategic decision-making.",
              "Created an intuitive two-player mode with turn indicators and score tracking.",
              "Added smooth animations using Framer Motion for enhanced gameplay experience.",
              "Designed a clean and responsive UI with Tailwind CSS.",
              "Ensured seamless navigation with a home screen, restart, and return options."
            ],
            images: ["/xo.png", "/xo2.png"]
        },        
        {
          date: "Sep 2025 - Oct 2025",
          title: "ResumeAI Pro",
          company: "Personal Project",
          description:
            "ResumeAI Pro is an AI-powered resume builder that helps users create, edit, and export professional resumes. It features AI-generated bullet points, tailored summaries, job-description analysis, and drag-and-drop ordering.",
          skills: [
            "Next.js",
            "React",
            "Firebase",
            "@google/generative-ai (Gemini)",
            "react-hook-form",
            "react-pdf / jspdf",
          ],
          responsibilities: [
            "Built an interactive resume editor with drag-and-drop ordering and real-time preview.",
            "Integrated Google Gemini for AI-generated bullet points, summaries, and rewrites.",
            "Implemented export options: PDF, TXT, and JSON, plus docx → HTML import support.",
            "Hooked up Firebase for persistence and authentication; prepared server API routes for AI calls.",
            "Designed accessible, responsive templates and optimized performance for mobile users."
          ],
          images: ["/resumeai.png", "/resumeai2.png"]
        },
        {
          date: "Sep 2024 - Current",
          title: "utilo - Web Utilities",
          company: "Personal Project",
          description:
            "A lightweight collection of util Web Utilities calculators, converters, encoders, and generators built with Next.js and React for quick, accurate results.",
          skills: [
            "Next.js",
            "React",
            "Node.js",
            "CSS Modules + PostCSS",
            "API Routes"
          ],
          responsibilities: [
            "Built fast calculators (EMI, SIP, BMI) and converters (currency, units, timestamps).",
            "Implemented encoders/formatters (Base64, URL, JSON) and generators (QR, password).",
            "Optimized the UI for quick lookups on mobile and desktop with small bundle sizes.",
            "Exposed lightweight API routes for server-side conversions and deployed the site to Vercel."
          ],
          images: ["/utilo.png", "/utilo2.png"]
        },
        {
          date: "Dec 2024 - Dec 2024",
          title: "TuneHive",
          company: "Personal Project",
          description: 
            "TuneHive is a free music and playlist downloader that lets users download their favorite songs for offline playback. Whether it's trending hits, personalized playlists, or timeless classics, TuneHive ensures a seamless and unlimited music experience without the need for an internet connection.",
          skills: [
            "React Native",
            "Firebase",
            "JavaScript",
            "Tailwind CSS",
            "API Integration"
          ],
          responsibilities: [
            "Built a music downloader app with offline playback capabilities.",
            "Integrated music APIs to fetch and download songs and playlists.",
            "Designed an intuitive and responsive UI using React Native and Tailwind CSS.",
            "Implemented Firebase for user authentication and data storage.",
            "Ensured seamless download management and background playback.",
            "Optimized performance for smooth audio streaming and downloading experience."
          ],
          images: ["/tunehive2.png"]
      },      
                
              ].map((exp, index) => (
                <div key={index} className={styles.container}>
                  <div className={styles.bulletPoint} />
                  <div className={styles.experienceItem}>
                    <div className={styles.experienceItemContainer}>
                      <div className={styles.experienceItemSticky}>
                        <span className={styles.date}>{exp.date}</span>
                        <h3 className={styles.title}>{exp.title}</h3>
                        <p className={styles.company}>{exp.company}</p>
                        {exp.location && <p className={styles.location}>{exp.location}</p>}
                      </div>
                      <div>
                      {exp.description && <p className={styles.description}>{exp.description}</p>}

                      {exp.responsibilities && (
                        <ul className={styles.responsibilities}>
                          {exp.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                      

                      

                      {exp.images && exp.images.length > 0 && (
                        <div className={styles.images}>
                          {exp.images.map((img, i) => (
                            <img key={i} src={img} alt={`Experience ${i + 1}`} />
                          ))}
                        </div>
                      )}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className={styles.skills}>
                          {exp.skills.map((skill, i) => (
                            <span key={i}>{skill}</span>
                          ))}
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://raw.githubusercontent.com/aditya9738d/codewings_files/main/Aditya%20Gond%20resume.pdf"
              download="Aditya_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <button
                className={`${styles.button} ${isHovered ? "active" : ""}`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
