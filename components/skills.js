import './skills.css';

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>Next.js / React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Mobile Development</h3>
          <ul>
            <li>Flutter & Dart</li>
            <li>Google Play Console</li>
            <li>Firebase Integration</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend & Languages</h3>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Node.js (Basics)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>UI/UX Design</h3>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
            <li>User-Centric Design</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Content Creation</h3>
          <ul>
            <li>Video Editing</li>
            <li>Photo/Thumbnail Editing</li>
            <li>Shorts/Video Creation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
