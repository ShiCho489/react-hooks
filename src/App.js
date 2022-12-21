import React, { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState(" ")

  const inputChanged = (e) => {

    setName(e.target.value)
  }
  

  return (
    <div className="App">
    {name}<br />
    <input  
      value = {name} onChange={inputChanged} />
    </div>
  );
}

export default App;
