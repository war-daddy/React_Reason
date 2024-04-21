import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [length, setLength] = useState(50);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");
  const [special, setSpecial] = useState("");

  const handleSliderChange = (event) => {
    setLength(parseInt(event.target.value));
  };

  const handleNumbers = (event) => {
    setNumber(event.target.checked);
  };
  const handleUpper = (event) => {
    setUpper(event.target.checked);
  };
  const handleLower = (event) => {
    setLower(event.target.checked);
  };

  const handleSpecial = (event) => {
    setSpecial(event.target.checked);
  };

  const generatePass = () => {
    let pass = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let allChars = "";

    if (number) {
      allChars += numbers;
    }
    if (lower) {
      allChars += lowerCase;
    }
    if (upper) {
      allChars += upperCase;
    }
    if (special) {
      allChars += specialChars;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      pass += allChars[randomIndex];
    }
    if (allChars == "") {
      setPassword("select any type of passowrd");
    } else setPassword(pass);
  };

  return (
    <main>
      <div className="box">
        <h1>Generate Password</h1>
        <div className="length">
          <label htmlFor="lengthSlider">Password Length: {length}</label>
          <input type="range" value={length} onChange={handleSliderChange} />
        </div>
        <div className="types">
          <label htmlFor="type">Number:</label>
          <input type="checkbox" checked={number} onChange={handleNumbers} />
          <label htmlFor="type">Uppercase:</label>
          <input type="checkbox" checked={upper} onChange={handleUpper} />
          <label htmlFor="type">Lowercase:</label>
          <input type="checkbox" checked={lower} onChange={handleLower} />
          <label htmlFor="type">SpecialCharacter:</label>
          <input type="checkbox" checked={special} onChange={handleSpecial} />
        </div>
        <div className="btns">
          <button onClick={generatePass}>Generate</button>
        </div>
        <div className="ans">{password}</div>
      </div>
    </main>
  );
}
