
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  
  const handleRestar = () =>{
    setCount(count-1);
  } 

  const handleReset = () =>{
    setCount(0)
  }

  const handleSumar = () =>{
    setCount(count + 1)
  }

  let color = "#fff";
  if(count >= 1) {color = "green"}
  else if( count < 0){color = "red"}
  else{color = "white"}


  return (
    <div className='counter_sec'>
      <div className='countainer counter'>
        <h1>Counter APP</h1>
        <p className='count' style={{color: color}}>{count}</p>
        <dvi className="buttons">
          <button className='res' onClick={handleRestar}> - Restar</button>
          <button className='reset' onClick={handleReset}> Resetear </button>
          <button className='sum' onClick={handleSumar}> + Sumar</button>
        </dvi>
      </div>

    </div>
  );
}

export default App;
