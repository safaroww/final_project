import './App.scss';
import { Header } from './Header/Header';
import { Landing } from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import {FlightDetailPage} from './pages/Flight/FlightDetailPage/FlightDetailPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/flight-detail" element={<FlightDetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
