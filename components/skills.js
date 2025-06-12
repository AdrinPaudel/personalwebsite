import './skills.css';

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            <li>Next.js/React</li>
            <li>Vercel</li>
            <li>HTML & CSS</li>
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
          <h3>UI/UX Design</h3>
          <ul>
            <li>Figma</li>
            <li>Canva</li>

          </ul>
        </div>
        <div className="skill-category">
          <h3>App/Game Testing</h3>
          <ul>
            <li>Manual & Automated Testing</li>
            <li>Bug Tracking</li>
            <li>User Experience</li>
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
            <li>Video/Shorts Creation</li>
            <li>Video Editing</li>
            <li>Photo/Thumbnail Editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
