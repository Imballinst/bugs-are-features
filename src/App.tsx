import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Feature 1: how to properly handle this type error?
    setValue(e.target.value);
  }

  function resetValue() {
    // Feature 2: when this is clicked, the input field value still persists (not resetting to 0). How to fix it?
    setValue(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="value">{value}</h2>
        <div className="form">
          <button onClick={resetValue}>Reset</button>
          <input type="number" onChange={onChange} />
        </div>
      </header>
    </div>
  );
};

export { App };
