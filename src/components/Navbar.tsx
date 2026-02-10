import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SJ.
        </Link>

        {isHome && (
          <div className="navbar-links">
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('awards')}>Awards</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
          </div>
        )}

        <button
          className="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
