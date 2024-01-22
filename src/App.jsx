// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />



        </Route>
      </Routes>
    </Router>
  );
}

export default App;
