import './App.css';
import DocterCard from './Components/DocterCard';
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
    </div>
  );
}

export default App;
