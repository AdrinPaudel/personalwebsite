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
            I am a final-year Computer Engineering student at Kathmandu
            Engineering College with a passion for building beautiful and
            functional digital experiences. I specialize in combining technical
            development with user-centric design, using tools like Next.js,
            Flutter, and Figma to bring ideas to life. From developing
            intelligent web applications to designing intuitive mobile UIs, I am
            driven by a desire to learn, grow, and contribute to projects that
            solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
