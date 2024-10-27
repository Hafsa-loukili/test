
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;