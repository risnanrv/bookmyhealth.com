import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Docters from './Pages/Docters';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AppoinmentPage from './Pages/Appoinment';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docters" element={<Docters />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appoinment" element={<AppoinmentPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
