import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Docters from './Pages/Docters';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="/bookmyhealth.com" element={<Home />} />
          <Route path="/bookmyhealth.com/docters" element={<Docters/>} />
          <Route path="/bookmyhealth.com/about" element={<About/>} />
          <Route path="/bookmyhealth.com/contact" element={<Contact/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
