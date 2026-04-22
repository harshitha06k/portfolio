import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLetsTalk = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Already on home — just smooth scroll
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home, then scroll after page mounts
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="nav">
      <div className="nav-inner">

        <div className="nav-logo">HK<span className="nav-dot">.</span></div>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Resume
          </NavLink>
        </nav>

        <a href="#contact" className="nav-cta" onClick={handleLetsTalk}>
          Contact Me
          <span className="nav-cta-arrow"> </span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;