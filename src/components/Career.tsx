import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Intern</h4>
                <h5>Forage</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a virtual internship at Forage, gaining exposure to real industry projects and problem-solving tasks. Learned how companies approach development, data handling, and business challenges. Improved analytical thinking, coding practices, and understanding of professional workflows through structured simulation-based learning programs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Glucian</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked as an intern at Glucian, where I contributed to web development tasks and collaborated with team members on project features. Gained practical experience in coding, debugging, and improving application performance while understanding real-world development workflows and teamwork in a professional environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Ashok Kumar Santara</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am a passionate and motivated developer with hands-on experience in building web applications and solving real-world problems. I continuously improve my technical and design skills through projects and learning. I aim to grow as a full-stack developer while contributing effectively to innovative teams and impactful technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
