import './education.css';

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="timeline">
        <div className="timeline-block">
          <h3>Bachelor of Computer Engineering</h3>
          <p className="timeline-subhead">2022 – Present | Kathmandu Engineering College (Tribhuvan University)</p>
        </div>
        <div className="timeline-block">
          <h3>High School (Class 11 & 12)</h3>
          <p className="timeline-subhead">SOS Hermann Gmeiner School Gandaki, Pokhara</p>
        </div>
        <div className="timeline-block">
          <h3>Secondary School (SEE / Class 10)</h3>
          <p className="timeline-subhead">Sishu Niketan English Secondary Boarding School, Pokhara</p>
        </div>
        <div className="timeline-block">
          <h3>Software Fellowship Certificate</h3>
          <p className="timeline-subhead">LOCUS 2024 | Institute of Engineering, Pulchowk Campus</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
