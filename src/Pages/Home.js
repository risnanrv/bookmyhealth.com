import React from 'react'
import NavSection from './../Components/Navbar/NavSection';
import MainHeader from './../Components/MainHeader/MainHeader';
import TopDocters from './../Components/TopDocters/TopDocters';
import SignupContainer from './../Components/SignupContainer/SignupContainer';
import Footer from './../Components/Footer/Footer';
function Home() {
  return (
    <div className='Home'>
    <NavSection/>
    <MainHeader/>
    <TopDocters/>
    <SignupContainer/>
    <Footer/>
    </div>
  )
}

export default Home
