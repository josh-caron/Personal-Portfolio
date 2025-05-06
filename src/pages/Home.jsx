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
          <p>I'm an undergraduate student at the University of Florida, deeply interested in quantitative finance.</p>
        </div>
      </section>

      {/* About Me */}
      <section>
        <h2>About Me</h2>
        <p>
          My name is Joshua Caron. I came to UF at 17 with my AA degree, ready to dive deep into the computer science curriculum UF had to offer.
          Along the way I picked up a double major in mathematics. My passion for software development, toolbox of analytical skills,
          and broad interest in finance led me to pursue a career at the intersection of all three: Quantitative research / development.
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
