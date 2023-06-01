import React from 'react';
import './App.scss';
// import { Style } from './Styles/Style';
import { Header } from './Header/Header';
import { HotelBookingDetail } from './pages/Hotel/HotelBookingDetail/HotelBookingDetail';

function App() {
  return (
   <>
   <Header />
    {/* <Style /> */}
    <HotelBookingDetail />

   </>
  );
}

export default App;
