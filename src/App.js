import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Docters from './Pages/Docters';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AppoinmentPage from './Pages/Appoinment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/docters" element={<Docters />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appoinment" element={<AppoinmentPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
