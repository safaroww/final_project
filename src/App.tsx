import './App.scss';
import { Header } from './Header/Header';
import Landing from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

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
