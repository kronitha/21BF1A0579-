import React, { useState } from 'react';
import './App.css';

function App() {
  const [numberType, setNumberType] = useState('p');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchNumbers = () => {
    setError(null);
    const data = {
      p: [2, 3, 5, 7, 11],
      f: [1, 1, 2, 3, 5, 8, 13],
      e: [2, 4, 6, 8, 10],
      r: [4, 8, 15, 16, 23, 42]
    };

    if (data[numberType]) {
      setResponse(data[numberType]);
    } else {
      setError('Invalid number type');
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <label htmlFor="numberType">Choose a number type:</label>
      <select 
        id="numberType" 
        value={numberType} 
        onChange={(e) => setNumberType(e.target.value)}
      >
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Fetch Numbers</button>
      {error && <p className="error">{error}</p>}
      <div className="response">
        <h2>Response</h2>
        {response ? (
          <pre>{JSON.stringify(response, null, 2)}</pre>
        ) : (
          <p>No data yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;