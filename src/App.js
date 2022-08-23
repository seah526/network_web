import './App.css';
import { React, useState } from 'react';
import ReadCSV from './components/readCSV';
import GraphVis from './components/GraphVis';

function App() {

  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  
  return (
    <div>
      <ReadCSV 
        onChangeState={ function(_nodes){
          _nodes.forEach(value => {
            setNodes(nodes => [...nodes, {id: value[0], label: value[1], value: Number(value[2]), title: value[1]}]);
          });
        }}>
      </ReadCSV>
      <ReadCSV
        onChangeState={ function(_links){
          _links.forEach(value => {
            setLinks(links => [...links, {from: Number(value[0]), to: Number(value[1]), value: Number(value[2])}]);
          });
      }}>
      </ReadCSV>
      <GraphVis
        nodes = {nodes}
        links = {links}
      >
      </GraphVis>
    </div>
  );
}

export default App;
