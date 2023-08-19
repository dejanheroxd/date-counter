import { useState } from "react";

export default function App() {
  return (
    <div className="date-counter-container">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [inputNumber, setInputNumber] = useState(0);
  const [sliderSteps, setSliderSteps] = useState(1);

  function handleIncrement() {
    setInputNumber(inputNumber + sliderSteps);
  }

  function handleDecrement() {
    setInputNumber(inputNumber - sliderSteps);
  }

  function handleDirectInputChange(event) {
    const inputValue = event.target.value;
    isNaN(inputValue) || setInputNumber(Number(inputValue));
  }

  function handleSliderSteps(event) {
    setSliderSteps(Number(event.target.value));
  }

  function calculateDate(days) {
    const currentDate = new Date();
    const calculatedDate = new Date(currentDate);
    calculatedDate.setDate(currentDate.getDate() + days);
    return calculatedDate.toLocaleString();
  }

  const calculatedDate = calculateDate(inputNumber);

  return (
    <>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="10"
          defaultValue={1}
          onChange={handleSliderSteps}
        />
        <p>Steps: {sliderSteps}</p>
      </div>
      <div className="input-container">
        <button onClick={handleDecrement}>-</button>
        <input
          type="text"
          value={inputNumber}
          onChange={handleDirectInputChange}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>
        {inputNumber} days from today is {calculatedDate}
      </p>
    </>
  );
}
