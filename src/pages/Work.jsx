function Work() {
    return (
      <div className="container">
        <h1>Work Experience & Involvement</h1>
        {/* Involvement */}
        <section className="involvement-section">
        <h2>Work Experience</h2>
        
        <div className="involvement-item">
          <div className="involvement-left">
            <h3>Physics Tutor / Content Creator</h3>
            <p><strong>Study Edge</strong></p>
            <p><em>June 2024 - Present</em></p>
          </div>
          <div className="involvement-right">
            <ul>
              <li>Created and produced over 200 e-learning videos covering topics in physics, designed to support students at the University of Florida.</li>
              <li>Achieved significant reach and engagement, with hundreds of unique viewers and substantial total watch hours across the video library.</li>
            </ul>
          </div>
        </div>

        <div className="involvement-item">
          <div className="involvement-left">
            <h3>Furniture Reselling Business Owner</h3>
            <p><strong>Couch Guys - Self Employed</strong></p>
            <p><em>August 2023 - Present</em></p>
          </div>
          <div className="involvement-right">
            <ul>
              <li>Launched and scaled a profitable furniture resale business focused on sourcing, refurbishing, and reselling high-demand couches through online marketplaces.</li>
              <li>Managed end-to-end operations including product sourcing, pricing strategy, logistics, and delivery.</li>
              <li>Developed practical experience in entrepreneurship, sales, digital marketing, and customer service.</li>
              <li>Grew the business to six-figure revenue through strategic and efficient operations.</li>
            </ul>
          </div>
        </div>

        <div className="involvement-item">
          <div className="involvement-left">
            <h3>Teaching Assistant / Tutor</h3>
            <p><strong>Indian River State College</strong></p>
            <p><em>May 2023 - June 2024</em></p>
          </div>
          <div className="involvement-right">
            <ul>
              <li>Provided academic support in upper-level undergraduate math courses, through Calculus III, assisting students in developing conceptual understanding and problem-solving techniques. </li>
              <li>Led weekly discussion sections and review sessions, reinforcing complex topics through detailed explanations and guided practice.</li>
            </ul>
          </div>
        </div>

      </section>


          {/* Involvement */}
        <section className="involvement-section">
        <h2>Involvement</h2>
        <div className="involvement-item">
          <div className="involvement-left">
            <h3>iOS Team Junior Project Manager</h3>
            <p><strong>SHPE - Society of Hispanic Professional Engineers</strong></p>
            <p><em>Fall 2025 – Spring 2026</em></p>
          </div>
          <div className="involvement-right">
            <ul>
            <li>Organize and conduct a 4-5 week training program to introduce new devlopers to XCode, Swift, Apollo GraphQL, GitHub, and Asana</li>
              <li>Assess each new developer's progress by evaluating their final project to ensure it meets quality and functionality standards.</li>
              <li>Monitor the integration of new developers into the team, ensuring a smooth transition into regular project work after training completion.</li>
            </ul>
          </div>
        </div>

        <div className="involvement-item">
          <div className="involvement-left">
            <h3>Participant</h3>
            <p><strong>Bank of America Global Tech Forum</strong></p>
            <p><em>Spring 2025</em></p>
          </div>
          <div className="involvement-right">
            <ul>
            <li>Selected alongside a competitive group of applicants to access development workshops hosted by business leaders.</li>
              <li>Attended professional skills building workshops and participated in technical breakout sessions.</li>
              <li>Enhanced my knowledge of current industry practices revolving around AI, Information Security, Agile Methodology, and Innovation in Tech.</li>
            </ul>
          </div>
        </div>
      </section>
      </div>
    );
  }
  
  export default Work;
  