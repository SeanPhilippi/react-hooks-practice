import React from 'react';
import Counter from './Counter';
import Form from './Form';
import './App.css';

const App = () => {
  return (
    <>
      <div className="counter-container">
        Counter:
        <Counter />
      </div>
      <div>
        Form:
        <Form />
      </div>
    </>
  );
};

export default App;