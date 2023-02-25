import React, { useState } from 'react';
import './style.css'

function BmiCalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculateBmi() {
    const heightInMeters = height / 100;
    const bmiResult = weight / (heightInMeters * heightInMeters);
    setBmi(bmiResult.toFixed(2));
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>Weight (in kg) : </label>
      <input className='in' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <br />
      <label>Height (in cm) : </label>
      <input className='in' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      <br />
      <button className='click' onClick={calculateBmi}>Calculate BMI</button>
      <br />
      <h2>BMI: {bmi}</h2>
    </div>
  );
}

export default BmiCalculator;
