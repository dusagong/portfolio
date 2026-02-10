import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
