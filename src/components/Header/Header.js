import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="branding">
          Math Genius
        </h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/calculator">Calculator</a></li>
            <li><a href="/quote">Quote</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
