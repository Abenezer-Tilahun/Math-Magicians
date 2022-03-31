import React from 'react';
import './Quote.css';

export default function Quote() {
  return (
    <blockquote>
      “Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding.”
      <span className="quote-ref">
        - William Paul Thurston.
      </span>
    </blockquote>
  );
}
