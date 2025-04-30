import { Link } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaFolderOpen, FaEnvelope, FaFilePdf, FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa';

function Navbar() {
  return (
    <nav style={{
      width: '80px',
      background: '#333',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      padding: '2rem 0',
      position: 'fixed',
      left: 0,
      top: 0,
      justifyContent: 'flex-start' 
    }}>
      
      {/* Top navigation */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '2rem', color: 'white' }}><FaHome /></Link>
        <Link to="/education" style={{ fontSize: '2rem', color: 'white' }}><FaGraduationCap /></Link>
        <Link to="/projects" style={{ fontSize: '2rem', color: 'white' }}><FaFolderOpen /></Link>
        <Link to="/work" style={{ fontSize: '2rem', color: 'white' }}><FaBriefcase /></Link> 
     </div>

      {/* Bottom external links */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        marginTop: 'auto', 
        marginBottom: '3rem' 
      }}>
        <a href="mailto:j.caron@ufl.edu" style={{ fontSize: '2rem', color: 'white' }} target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href="/Joshua_Caron_Resume.pdf" style={{ fontSize: '2rem', color: 'white' }} target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
        <a href="https://github.com/josh-caron" style={{ fontSize: '2rem', color: 'white' }} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/-joshuacaron-" style={{ fontSize: '2rem', color: 'white' }} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

    </nav>
  );
}

export default Navbar;
