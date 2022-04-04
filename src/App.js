import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id="tabs">
        <Routes>
          <Route path="/Math-Magicians" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
