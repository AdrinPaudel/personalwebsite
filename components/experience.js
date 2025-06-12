import './experience.css';

const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-block">
          <h3>UI/UX Designer (Volunteer)</h3>
          <p className="timeline-subhead">Learn Smart</p>
          <ul>
            <li>Designed user-friendly web and mobile app interfaces for an AI-based learning platform.</li>
            <li>Focused on creating engaging and intuitive designs to enhance the overall learning experience.</li>
          </ul>
        </div>
        <div className="timeline-block">
          <h3>Game Tester</h3>
          <p className="timeline-subhead">Project Prison (Steam)</p>
          <ul>
            <li>Conducted quality assurance testing, identifying and documenting bugs, gameplay issues, and performance flaws.</li>
            <li>Provided actionable feedback on gameplay mechanics and UI to improve the final product.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
