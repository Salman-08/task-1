// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import HomePage from './pages/home';
import Company from './pages/company';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page route */}
        <Route path="/company" element={<Company />} /> {/* Company Page route */}
      </Routes>
    </Router>
  );
}

export default App;
