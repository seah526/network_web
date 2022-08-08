import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState([
    {id: 1, name: 'Alice'}, 
    {
    id: 2,
    name: 'Bob'}]);

  const handleClick = () => {
    // 👇️ push to end of state array
    setValue(value => [...value, 
      {id: 3, 
        name: 'Carl'
      }]);

    // 👇️ spread an array into the state array
    // setNames(current => [...current, ...['Carl', 'Delilah']]);

    // 👇️ push to beginning of state array
    // setNames(current => ['Zoey', ...current]);
  };
  return (
    // <div className="App">
    //   <header className="App-header">
       
    //   </header>
    // </div>
    <div>
      <div>
        <button onClick={handleClick}>Push to state array</button>
      </div>

      {value.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
