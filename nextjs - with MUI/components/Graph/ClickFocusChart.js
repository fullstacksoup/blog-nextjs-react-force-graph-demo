import {useRef, useCallback} from 'react'

import {  ForceGraph3D  } from 'react-force-graph';

// Random data
const N = 30;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1))
    }))
};



export default function App() {
  const fgRef = useRef();

  const handleClick = useCallback(node => {
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
  
    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  }, [fgRef]);
  
  return (
    <ForceGraph3D
      ref={fgRef}
      
      nodeColor={() => "lightblue"}
      linkColor={() => "white"}
      graphData={gData}
      onNodeClick={handleClick}
    />
  );
}
