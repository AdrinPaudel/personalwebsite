import Link from 'next/link';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I&apos;m Adrin Paudel.</h1>
        <p className="hero-subtitle">
          Computer Engineer, UI/UX Designer & Digital Creator
        </p>
        <Link href="#projects" className="hero-button">
          View My Work
        </Link>
      </div>
    </div>
  );
};

export default Hero;
