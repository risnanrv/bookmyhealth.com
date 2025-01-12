import './App.css';
import Footer from './Components/Footer/Footer';
import MainHeader from './Components/MainHeader/MainHeader';
import NavSection from './Components/Navbar/NavSection';
import SignupContainer from './Components/SignupContainer/SignupContainer';
import TopDocters from './Components/TopDocters/TopDocters';

function App() {
  return (
    <div className="App">
    <NavSection/>
    <MainHeader/>
    <TopDocters/>
    <SignupContainer/>
    <Footer/>
    </div>
  );
}

export default App;