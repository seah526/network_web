import { React, useState, useRef } from "react";
import Graph from "react-graph-vis";

function GraphVis(props){
    const graphRef = useRef();
    const graph = {
        nodes: props.nodes.map((e) => ({
          ...e, 
          font: {
            size: e.value * 60,
            color: "#fff",
          }
        })),
        edges: props.links.map((e) => ({
          ...e,
          width: 0.7,
          color: {
            color: e.value === 2 ? '#e2e2e2' : (e.value === 3 ? '#3956E2' : '#DD2E2E'),
            opacity: e.value === 2 ? 0.8 : 0.8,
            hover:e.value === 2 ? '#DD2E2E' : (e.value === 3 ? '#2040D8' : '#E2E2E2'),
            highlight: e.value === 2 ? '#DD2E2E' : (e.value === 3 ? '#2040D8' : '#E2E2E2'),
          }
        })),
        selected: [],
      };
      
    const options = {
      layout: {
        randomSeed: 23,
        hierarchical: false,
      },
      nodes: {
        shape: "box",
        // fixed: true,
      },
      edges: {
        smooth: {
          type: "dynamic",
          roundness: 1
        },
      },
      height: "1000px",
      
       physics: {
        hierarchicalRepulsion: {
          centralGravity: 0.01,
          springLength: 20000,
          springConstant: 0.1,
          nodeDistance: 150,
          // damping: 1,
          avoidOverlap: 1
        },
        maxVelocity: 5,
        minVelocity: 3,
        solver: "barnesHut",
        stabilization: {
          enabled: true,
          iterations: 100,
          updateInterval: 100,
          onlyDynamicEdges: false,
          fit: true
        },
        timestep: 0.1
      },
        interaction: {
          hover: true,
          hoverConnectedEdges: true,
          selectable: true,
          // dragView: false,
        }
    };

    const events = {
      selectNode: (event) => {
        refreshSelection(event.nodes);
        console.log(graphRef.current.Network.getPositions([event.nodes]));
      },
      deselectNode: (event) => {
      }
    };
    
    return (
        <div>
            <Graph
            ref = {graphRef}
            graph={graph}
            options={options}
            events={events}
            
        />
          <button onClick={function(){
            graph.nodes.forEach(node => {
              var data = graphRef.current.Network.getPositions([node.id]);
              console.log(JSON.stringify(data));
            })
          }}>GetPositions</button>
        </div>
       
    );
}

export default GraphVis;
