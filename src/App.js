import './App.css';
import { React, useState } from 'react';
import ReadCSV from './components/readCSV';

const nodes = [
  {id: Number, title: String}
];
const links = [
  {from : Number, to: Number}
];
  
function App() {

  return (
    <div>
      <ReadCSV 
        type = 'nodes'
        onChangeState={ function(table, _nodes){
          _nodes.map((value)=> {
            nodes.push({id: value[0], title: value[1]})
          });
          console.log(nodes);
        }}>
      </ReadCSV>
      <ReadCSV
        type = 'links'
        onChangeState={function(table, _links){
          _links.map((value) => {
            links.push({from: value[0], to: value[1]})
          });
          console.log(links);
        }}>
      </ReadCSV>
    </div>
  );
}

export default App;
