
import React from 'react'
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

export default function NodeChart(props) {

    const { useRef, useCallback } = React;
    const [data, setData] = React.useState([]);
    var win;
    const isCSR = process.env.BROWSER
    
    const myData =[
    {
        "nodes": [
            {
                "id": "id1",
                "name": "name1",
                "val": 1
            },
            {
                "id": "id2",
                "name": "name2",
                "val": 10
            },

        ],
        "links": [
            {
                "source": "id1",
                "target": "id2"
            },

        ]
    }
    ]




    return (
        <>
            {isCSR  && 
            <ForceGraph3D
                graphData={myData}
            />
            }

        </>
    )
}

