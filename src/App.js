import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';

function GlobalCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    if (!dot || !ring) return;
    const move = e => {
      dot.style.left  = e.clientX + 'px';
      dot.style.top   = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return null;
}

function App() {
  return (
    <HashRouter>
      <div id="cur-dot"  className="cur-dot"  aria-hidden="true" />
      <div id="cur-ring" className="cur-ring" aria-hidden="true" />
      <GlobalCursor />

      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume"   element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;