function Education() {
    return (
      <div className="container">
        <h1>Education Background</h1>
        <section>
            <p>I took my first college course at 14, dual-enrolling at Indian River State College in Fort Pierce, Florida. <br />
                At 15, I completed Calculus I/II with top marks, inspiring me to pursue an engineering track for my associate degree. <br />
                At 17, I graduated high school early and accepted admission to the University of Florida Honors Program to continue working toward my bachelor's degree in Computer Science. <br />
                At 18, I enrolled in my first graduate class thorugh acceptance in UF's BS/MS combined degree program. </p>
        </section>


        {/* Degree info */}
        <h2>University of Florida</h2>
        <p>Bachelor of Science in Computer Science and Mathematics <br />
        June 2024 - May 2027</p>

      {/* Relevant Coursework Table */}
      <section>
        <h3>Selected Coursework</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={thStyle}>Course Code</th>
              <th style={thStyle}>Course Title</th>
              <th style={thStyle}>Grade</th>
              <th style={thStyle}>Semester</th>
              <th style={thStyle}>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>CAP6610</td>
              <td style={tdStyle}>Machine Learning</td>
              <td style={tdStyle}>IP</td>
              <td style={tdStyle}>Spring 2026</td>
              <td style={tdStyle}>Graduate level machine learning: probabilistic models and algorithms that let computers learn from data</td>
            </tr>
            <tr>
              <td style={tdStyle}>COP4533</td>
              <td style={tdStyle}>Algorithm Abstraction & Design</td>
              <td style={tdStyle}>IP</td>
              <td style={tdStyle}>Spring 2026</td>
              <td style={tdStyle}>Advanced algorithms: paradigms, complexity, and limits of computation</td>
            </tr>
             <tr>
              <td style={tdStyle}>MAP4102</td>
              <td style={tdStyle}>Probability Theory & Stochastic Processes</td>
              <td style={tdStyle}>IP</td>
              <td style={tdStyle}>Spring 2026</td>
              <td style={tdStyle}>Mathematical foundations of probability; random processes</td>
            </tr>
             <tr>
              <td style={tdStyle}>CDA3101</td>
              <td style={tdStyle}>Computer Organization</td>
              <td style={tdStyle}>IP</td>
              <td style={tdStyle}>Spring 2026</td>
              <td style={tdStyle}>Computers at the hardware and assembly level</td>
            </tr>
          <tr>
              <td style={tdStyle}>COT5615</td>
              <td style={tdStyle}>Math for Intelligent Systems</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2025</td>
              <td style={tdStyle}>Mathematical foundations of intelligent systems, including linear algebra, probability, and optimization</td>
            </tr>
          <tr>
              <td style={tdStyle}>CIS4301</td>
              <td style={tdStyle}>Information and Database Systems I</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2025</td>
              <td style={tdStyle}>Principles of SQL programming and database design</td>
            </tr>
          <tr>
              <td style={tdStyle}>MAS4115</td>
              <td style={tdStyle}>Linear Algebra for Data Science</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2025</td>
              <td style={tdStyle}>Linear algebra applications in machine learning and data science</td>
            </tr>
          <tr>
              <td style={tdStyle}>CEN3031</td>
              <td style={tdStyle}>Introduction to Software Engineering</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2025</td>
              <td style={tdStyle}>Software development lifecycle, testing, and project management</td>
            </tr>
            <tr>
              <td style={tdStyle}>COP3530</td>
              <td style={tdStyle}>Data Structures and Algorithms</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Summer 2025</td>
              <td style={tdStyle}>Study of fundamental data structures and algorithm analysis</td>
            </tr>
            <tr>
              <td style={tdStyle}>MAS3114</td>
              <td style={tdStyle}>Computational Linear Algebra</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Summer 2025</td>
              <td style={tdStyle}>Numerical methods for solving linear algebra problems with Matlab</td>
            </tr>       
            <tr>
              <td style={tdStyle}>COP3503C</td>
              <td style={tdStyle}>Programming Fundamentals II (C++)</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Spring 2025</td>
              <td style={tdStyle}>Object-oriented programming, data structures, memory management</td>
            </tr>
            <tr>
              <td style={tdStyle}>COT3100</td>
              <td style={tdStyle}>Applications of Discrete Structures</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Spring 2025</td>
              <td style={tdStyle}>Applications of logic, combinatorics, graphs, and discrete math in CS</td>
            </tr>
            <tr>
              <td style={tdStyle}>MHF3202</td>
              <td style={tdStyle}>Sets and Logic</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Spring 2025</td>
              <td style={tdStyle}>Intro to formal logic, set theory, proofs, and discrete mathematics</td>
            </tr>
            <tr>
              <td style={tdStyle}>COP3502C</td>
              <td style={tdStyle}>Programming Fundamentals I (Python)</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2024</td>
              <td style={tdStyle}>Intro to programming, algorithms, data structures in Python</td>
            </tr>
            <tr>
              <td style={tdStyle}>STA4321</td>
              <td style={tdStyle}>Introduction to Probability</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2024</td>
              <td style={tdStyle}>Probability theory: random variables, distributions, expected values</td>
            </tr>
            <tr>
              <td style={tdStyle}>STA3032</td>
              <td style={tdStyle}>Engineering Statistics</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Summer 2024</td>
              <td style={tdStyle}>Probability, statistical analysis, hypothesis testing, regression, ANOVA</td>
            </tr>
          </tbody>
        </table>
      </section>


      {/* Degree info */}
      <h2>Indian River State College</h2>
        <p>Associate in Arts <br />
        January 2022 - May 2024</p>

      {/* Relevant Coursework Table */}
      <section>
        <h3>Selected Coursework</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={thStyle}>Course Code</th>
              <th style={thStyle}>Course Title</th>
              <th style={thStyle}>Grade</th>
              <th style={thStyle}>Semester</th>
              <th style={thStyle}>Summary</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td style={tdStyle}>PHY2049</td>
              <td style={tdStyle}>Physics With Calculus II</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Spring 2024</td>
              <td style={tdStyle}>Electricity, magnetism, circuits, optics</td>
            </tr>
            <tr>
              <td style={tdStyle}>PHY2048</td>
              <td style={tdStyle}>Physics With Calculus II</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2023</td>
              <td style={tdStyle}>Mechanics: kinematics, Newton's laws, energy, momentum, rotation</td>
            </tr>
            <tr>
              <td style={tdStyle}>MAP2302</td>
              <td style={tdStyle}>Differential Equations</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Summer 2023</td>
              <td style={tdStyle}>First order and higher order differential equations and applications</td>
            </tr>
          <tr>
              <td style={tdStyle}>MAC2313</td>
              <td style={tdStyle}>Calculus III w/ Analytic Geometry</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Spring 2023</td>
              <td style={tdStyle}>Multivariable calculus: partial derivatives, multiple integrals, vectors</td>
            </tr>
            <tr>
              <td style={tdStyle}>MAC2312</td>
              <td style={tdStyle}>Calculus II w/ Analytic Geometry</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Fall 2022</td>
              <td style={tdStyle}>Advanced integration and applications, polar/parametric, sequences/series</td>
            </tr>
            <tr>
              <td style={tdStyle}>MAC2311</td>
              <td style={tdStyle}>Calculus I w/ Analytic Geometry</td>
              <td style={tdStyle}>A</td>
              <td style={tdStyle}>Summer 2022</td>
              <td style={tdStyle}>Limits, differentiation, derivative applications, basic integration</td>
            </tr>     
          </tbody>
        </table>
      </section>


    </div>
  );
}

// Simple inline styles
const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2'
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left'
};

export default Education;
  