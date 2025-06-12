import Image from 'next/image';
import './about.css';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="about-visual-container">
          <Image
            src="/images/aboutme.png" // Replace with your Fourier art SVG when ready
            alt="A visual representation of Adrin Paudel"
            width={350}
            height={350}
            className="about-visual"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a final-year Computer Engineering student specializing in digital creation.
            My technical expertise involves building and deploying full-stack web and mobile applications,
             designing intuitive user interfaces (UI/UX), and integrating AI models.
             I also have a strong creative side, with hands-on skills in video editing and content creation.
             As a driven team player, I am passionate about applying this blend of technical and 
             creative skills to solve real-world problems and am dedicated to continuous growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
