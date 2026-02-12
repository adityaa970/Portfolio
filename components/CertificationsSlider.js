import Marquee from "react-fast-marquee";
import styles from "../styles/CertificationsSlider.module.css";

const certifications = [
    {
    title: "Internship",
    issuer: "Sabsoftzone pvt ltd",
    year: "2025",
    image: "/internship-cert.jpg",
  },
  {
    title: "Blind Coding",
    issuer: "Universit of Delhi",
    year: "2025",
    image: "/DU_blindCoding.png",
  },
  {
    title: "Squash the BUG",
    issuer: "University of Delhi",
    year: "2025",
    image: "/DU_bugs.png",
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "Infosys",
    year: "2025",
    image: "/Infosys_iot.png",
  },
    {
    title: "Learnin Python",
    issuer: "Infosys",
    year: "2025",
    image: "/Infosys_python.png",
  },
    {
    title: "Blind Coding 1st Position",
    issuer: "MIMT Collage",
    year: "2024",
    image: "/blind_coding.jpg",
  },
  {
    title: "Introduction to Ds, Ai, ML",
    issuer: "MIMT Collage",
    year: "2023",
    image: "/data_science.jpg",
  },
    {
    title: "Hardware Assembly and Networking",
    issuer: "MIMT Collage",
    year: "2024",
    image: "/hardware_assembly_and_Networking.jpg",
  },
];

export default function CertificationsSlider() {
  return (
    <div className={styles.sliderContainer}>
    <div className={styles.text} style={{width:'90%', margin:'auto', marginBottom:'1rem'}}>
    <h2 className={styles.heading}>Proven Knowledge</h2>
    <h2 className={styles.mainheading}>Certified Expertise</h2>
    </div>
      <Marquee gradient={false} speed={30} pauseOnHover={true}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <img src={cert.image} alt={cert.title} className={styles.certImage} />
            <div className={styles.certDetails}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer} - {cert.year}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
