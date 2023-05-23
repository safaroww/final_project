import './App.scss';
<<<<<<< HEAD
import { Header } from './Header/Header';
import { Landing } from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
=======
import { Footer } from './Footer/Footer';
import { Landing } from './pages/Landing/Landing';
>>>>>>> 573ef42c6ca912f4e2d9e0d334b8780be4023312
import React from 'react';

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
=======
      <Landing />
      <Footer />
>>>>>>> 573ef42c6ca912f4e2d9e0d334b8780be4023312
    </>
  );
}

export default App;
