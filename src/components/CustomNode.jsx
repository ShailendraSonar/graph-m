import React from "react";
import ReactFlow, { MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import "./CustomNode.css";
import { ImNewTab } from "react-icons/im";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      <Handle type="source" position="right" id="method" style={{ top: 100 }} />
      <div className="node-header" style={{
    display: 'flex', 
    justifyContent: 'space-between', 
    color: '#fa8231'
  }}>
        <h4>{data.title}</h4> <ImNewTab />
      </div>
      <div className="node-body" style={{lineHeight:'20px'}}>
        <p className="method-name">{data.method}</p>
        <p><strong style={{color:'#fa8231'}}>DependentLibs:</strong> [{data.libs.join(', ')}]</p>
        <p><strong style={{color:'#fa8231'}}>Params:</strong> [{data.params.join(', ')}]</p>
        <p><strong style={{color:'#fa8231'}}>ResponseObject:</strong> {data.responseObject}</p>
      </div>
      <Handle type="target" position="left" id="method" style={{ top: 100 }} />
    </div>
  );
};

export default CustomNode;
