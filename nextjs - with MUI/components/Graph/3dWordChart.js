import {useRef, useState, useEffect, useCallback} from 'react'

import {  ForceGraph3D  } from 'react-force-graph';

import SpriteText from 'three-spritetext';

export default function App() {
  const fgRef = useRef();
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    fetch('/data/miserables.json').then(res => res.json()).then(sdata => {           
    console.log(sdata)
     setData(sdata)
    })   
    setTimeout(() => {
      setLoaded(true)
    }, 1000);
  }, [])
  
  return (
    <>
    {loaded &&
    <ForceGraph3D
      graphData={data}
      nodeAutoColorBy="group"
      nodeThreeObject={node => {
      const sprite = new SpriteText(node.id);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
    />
}
    </>
  );
}
