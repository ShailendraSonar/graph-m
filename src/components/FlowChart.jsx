import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import CustomNode from './CustomNode';

import initialNodes from '../components/initialNodes.js'
import initialEdges from './initialEdges.js';

const nodeTypes = {
  customNode: CustomNode,
};


const FlowChart = () => {
  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={{ customNode: CustomNode }}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="red" gap={16} style={{ backgroundColor: '#050505' }}/>
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
