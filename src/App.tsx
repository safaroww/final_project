import './App.scss';
import { Header } from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
