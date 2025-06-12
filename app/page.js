import Hero from '../components/hero';
import About from '../components/about';
import Skills from '../components/skills';
import Experience from '../components/experience'; // Note the capital E
import Education from '../components/education';   // Note the capital E
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
