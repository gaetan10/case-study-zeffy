
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './shared/components/header/Header';
import Donations from './donations/pages/Donations';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Donations />} />
      </Routes>
    </Router>  
  );
}

export default App;
