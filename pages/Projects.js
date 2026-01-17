import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";

export default function Home() {
  return (
    <div style={{marginTop:'50px'}}>
      <Projects visibleCount={20} />
      <Contact />
    </div>
  );
}
