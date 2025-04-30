function Home() {
    return (
      <div className="container">


        {/* Profile Photo + Intro */}
        <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <img
            src="/headshot.jpg"  
            alt="Profile"
            style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h1>Hey! I'm Josh.
            </h1>
            <p>I'm an undergraduate student at the University of Florida, deeply interested in quantitative finance.</p>
          </div>
        </section>
  


        {/* About Me */}
        <section>
          <h2>About Me</h2>
          <p>My name is Joshua Caron. 
            I came to UF at 17 with my AA degree, ready to dive deep into the computer science curriculum UF had to offer. 
            Along the way I picked up a double major in mathematics.
            My passion for software development, toolbox of analytical skills, and broad interest in finance led me to pursue a career at the intersection of all three: Quantitative research / development. 
             
          </p>
        </section>


        {/* Contact me */}
        <section>
          <h2>Contact Me</h2>
          <p>Add to here later</p>
        </section>
      </div>
    );
  }
  
  export default Home;
  