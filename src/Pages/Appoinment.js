import React from 'react'
import NavSection from '../Components/Navbar/NavSection'
import AppoinmentPage from '../Components/AppoinmentPage/AppoinmentPage'
import Footer from './../Components/Footer/Footer';
import BookingSlots from '../Components/BookingSlots/BookingSlots';
function Appoinment() {
  return (
    <div>
        <NavSection/>
        <AppoinmentPage/>
        <BookingSlots/>
        <Footer/>
    </div>
   
    
  )
}

export default Appoinment
