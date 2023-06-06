import './App.scss';
import { FlightListing } from './pages/Flight/FlightListing/FlightListing';
import { Header } from './Header/Header';
import { Landing } from './pages/Landing/Landing';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/Signup/SignUp';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#112211',
    },
    primary: { main: '#8DD3BB' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="flight-listing" element={<FlightListing />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
