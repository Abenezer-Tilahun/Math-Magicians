import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main id="tabs">
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default App;

