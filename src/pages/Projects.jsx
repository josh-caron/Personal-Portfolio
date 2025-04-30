function Projects() {
    return (
      <div className="container">
        <h1>Projects & Involvement</h1>
  
        {/* Projects Grid */}
        <section>
          <h2>Projects</h2>
          <div style={gridContainer}>
            {/* Project Card 1 */}
            <div style={card}>
              <h3>Portfolio Website</h3>
              <p><strong>Technologies:</strong> React.js, Vite, CSS</p>
              <p>Built a responsive portfolio to showcase my education, skills, and projects. Deployed on Vercel.</p>
              <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
  
            {/* Project Card 2 */}
            <div style={card}>
              <h3>Task Manager App</h3>
              <p><strong>Technologies:</strong> Python, Flask, SQLAlchemy</p>
              <p>Developed a web application for managing tasks and deadlines.</p>
              <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
  
            {/* Project Card 3 */}
            <div style={card}>
              <h3>Weather Dashboard</h3>
              <p><strong>Technologies:</strong> JavaScript, OpenWeather API</p>
              <p>Created a dashboard that displays current and forecasted weather based on user location.</p>
              <a href="https://github.com/yourusername/weather-dashboard" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
  
            {/* Add more project cards here! */}
          </div>
        </section>
  
        {/* Work Experience (still in simple list for now) */}
        <section style={{ marginTop: '4rem' }}>
          <h2>Work Experience</h2>
  
          <div style={{ marginBottom: '2rem' }}>
            <h3>Software Development Intern — XYZ Tech</h3>
            <p><strong>Summer 2024</strong></p>
            <ul>
              <li>Built and optimized front-end features using React.js and Redux.</li>
              <li>Collaborated with back-end teams to integrate REST APIs.</li>
              <li>Enhanced page performance by 30% through code refactoring.</li>
            </ul>
          </div>
        </section>
  
      </div>
    );
  }
  
  // Styles
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  };
  
  const card = {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };
  
  export default Projects;
  
  