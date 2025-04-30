function Projects() {
    return (
      <div className="container">
        <h1>Projects & Skills</h1>
  
        {/* Projects Grid */}
        <section>
          <h2>Projects</h2>
          <div style={gridContainer}>
            {/* Project Card 1 */}
            <div style={card}>
              <h3>(This!) Portfolio Website</h3>
              <p><strong>Technologies:</strong> React.js, Vite, CSS</p>
              <p>Built a responsive portfolio to showcase my education, skills, and projects. Deployed on Vercel.</p>
              <a href="https://github.com/josh-caron/Personal-Portfolio.git" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
  
            {/* Project Card 2 */}
            <div style={card}>
              <h3>Minesweeper</h3>
              <p><strong>Technologies:</strong> C++, SFML</p>
              <p>Created a fully functional Minesweeper game with adjustable dimensions, timer, and a leaderboard.</p>
              <a href="https://github.com/josh-caron/Minesweeper.git" target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
  
            {/* Add more project cards here! */}
          </div>
        </section>
  


        {/* Skills */}
        <section className="skills-section">
        <h2>Technical Skills</h2>

        <p><strong>Languages:</strong> Python, C++</p>
        {/* <p><strong>Frameworks:</strong> React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI</p> */}
        <p><strong>Developer Tools:</strong> Git, Github, VS Code, CLion, PyCharm</p>
        {/* <p><strong>Libraries:</strong> pandas, NumPy, Matplotlib</p> */}
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
  
  