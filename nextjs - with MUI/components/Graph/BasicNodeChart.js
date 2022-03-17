
import {  ForceGraph3D  } from 'react-force-graph';
import * as React from "react";

const { useRef } = React;

function genRandomTree(N = 300, reverse = false) {
  return {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
      links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
              [reverse ? 'target' : 'source']: id,
              [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
          }))
  };
}


export default function App() {
  const fgRef = useRef();
 

  return (
    <ForceGraph3D graphData={genRandomTree()}/>
  );
}

