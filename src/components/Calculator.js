import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import './Calculator.css';

function Calculator() {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [math, setMath] = useState('hi');

  const onClick = (buttonName) => {
    setCalcObj({ ...calcObj, ...calculate(calcObj, buttonName) });
  };

  useEffect(() => {
    const { total, next, operation } = calcObj;

    const newMath = [' '];
    [total, operation, next].forEach((item) => {
      if (item !== null) newMath.push(item);
    });

    // if we only have result, no math should be shown
    if (newMath.length === 2 && total !== null) {
      newMath.pop();
    }

    setMath(newMath.join(' '));
  }, [calcObj]);

  const result = calcObj.total || calcObj.next;

  const buttonsTitles = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];
  return (
    <div className="calculator-tab-wrapper">
      <div className="calculator-info">
        <h2>
          Let&apos;s do some math!
        </h2>
        <p>
          Use this calculator to do basic Math operation.
        </p>
      </div>
      <div className="calculator-wrapper">
        <div className="result-section">
          {Number(result)}
          <div className="math">{math}</div>
        </div>
        {
          buttonsTitles.map((btnTitle) => (
            <Button value={btnTitle} onClick={onClick} key={btnTitle} />
          ))
        }
      </div>
    </div>
  );
}

export default Calculator;
