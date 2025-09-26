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
          <h1>Hey! I'm Josh.</h1>
          <p>I'm an undergraduate student at the University of Florida, deeply interested in machine learning / research.</p>
        </div>
      </section>

      {/* About Me */}
      <section className="about-me p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I am a second-year Computer Science and Mathematics student with a strong
        interest in machine learning and an even greater passion for teaching.
        My goal is to become a professor, combining research with innovative,
        student-centered instruction.
      </p>

      <p className="mb-4">
        Currently, I work as a tutor and content creator at <strong>Study Edge</strong>,
        where I have produced hundreds of video lessons for Physics I and II at UF.
        These videos have received thousands of views and helped students master
        challenging material.
      </p>

      <p className="mb-4">
        My commitment to education began early. At just 16, I became a teaching
        assistant at Indian River State College, where I completed over 1,000
        tutoring hours and developed new teaching strategies as part of the STEM
        Pioneer program. Through this program, I created a 31-video, 15-hour
        Calculus II lecture series to fill a gap in resources—a project that
        continues to support learners today.
      </p>

      <p>
        Alongside teaching, I’ve pursued my own education with equal passion.
        By 18, I had earned over 100 college credits with a 4.0 GPA, was accepted
        into the UF Honors Program, and joined the combined degree track,
        already taking master’s-level courses. These experiences highlight my
        commitment to a future in academia, where I can continue growing as both
        a student and a teacher.
      </p>
    </section>

      {/* Contact me */}
      <section>
        <h2>Contact Me</h2>
        <form
  action="https://formspree.io/f/xrbqqvdb"
  method="POST"
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    marginTop: '1rem',
  }}
>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor="name">Your Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      style={{
        padding: '0.5rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
    />
  </div>

  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor="email">Your Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      style={{
        padding: '0.5rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
    />
  </div>

  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor="message">Your Message</label>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      style={{
        padding: '0.5rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '1rem',
      }}
    />
  </div>

  <button
    type="submit"
    style={{
      padding: '0.75rem',
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      width: 'fit-content',
    }}
  >
    Send
  </button>
</form>

      </section>

    </div>
  );
}

export default Home;
