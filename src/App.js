import React, {useState} from 'react'
import './App.css';

function App(){
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    if(e.target.id === 'c')
      return setResult('')
    if(e.target.id === 'clear')
      return setResult(result.substring(0, result.length - 1)) 
    if(e.target.id === 'result')
     return setResult(eval(result.replace('x', '*').replace('÷', '/')).toString())
    
  
    setResult(result.concat(e.target.name))
  }
  return (
    <>
    <div className='container'>
      
      <form>
        <input type="text" value={result} onChange={e => e}  />
      </form>
        <div className='keypad'>
        <button  id='clear'onClick={handleClick} className='color-button'>Clear</button>
        <button  id='c' onClick={handleClick} className='color-button'>C</button>
        <button name ="÷" onClick={handleClick} className='color-button'>&divide;</button>
        <button name ="7" onClick={handleClick}>7</button>
        <button name ="8" onClick={handleClick}>8</button>
        <button name ="9" onClick={handleClick}>9</button>
        <button name ="x" onClick={handleClick} className='color-button'>&times;</button>
        <button name ="4" onClick={handleClick}>4</button>
        <button name ="5" onClick={handleClick}>5</button>
        <button name ="6" onClick={handleClick}>6</button>
        <button name ="-" onClick={handleClick} className='color-button'>&ndash;</button>
        <button name ="1" onClick={handleClick}>1</button>
        <button name ="2" onClick={handleClick}>2</button>
        <button name ="3" onClick={handleClick}>3</button>
        <button name ="+" onClick={handleClick} className='color-button'>+</button>
        <button name ="0" onClick={handleClick}>0</button>
        <button name ="." onClick={handleClick} className='color-button'>.</button>
        <button  id='result'onClick={handleClick} className='color-button'>=</button>
        </div>

      </div>
    </>
  );
}

export default App;
