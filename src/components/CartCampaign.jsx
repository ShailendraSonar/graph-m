import React, { useState } from 'react';
import './card.css';
import { MdOutlineAccessTimeFilled } from "react-icons/md";
const CartCampaign = () => {
  const [selectedFlow, setSelectedFlow] = useState('POST /carts/{carts_id}');
  const [dependencies, setDependencies] = useState({
    httpx: true,
    product_client: false,
    sqlalchemy_orm: false,
    cart_crud: false,
    cartModel: false,
  });
  const [mockDatabase, setMockDatabase] = useState(false);
  const [dbConfig, setDbConfig] = useState({
    user: '',
    password: '',
    hostname: '',
  });

  const handleFlowChange = (event) => {
    setSelectedFlow(event.target.value);
  };

  const handleDependencyChange = (event) => {
    const { name, checked } = event.target;
    setDependencies((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleMockDatabaseChange = (event) => {
    setMockDatabase(event.target.checked);
  };

  const handleDbConfigChange = (event) => {
    const { name, value } = event.target;
    setDbConfig((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Submitted');
  };

  return (
    <div className="right-sidebar">
      <div className="cart-campaign">
        <h2>cart_campaign</h2>
        <p><MdOutlineAccessTimeFilled style={{color:'orange', position:'relative', top:'3px', left:'-2px'}}/>Last 2 commits scanned</p>
        <p><MdOutlineAccessTimeFilled style={{color:'orange', position:'relative', top:'3px', left:'-2px'}} />5 entry points identified</p>

        <div>
          <label>Selected flow</label>
          <select value={selectedFlow} onChange={handleFlowChange}>
            <option value="POST /carts/{carts_id}">POST /carts/{'{carts_id}'}</option>
            
          </select>
        </div>

        <div>
  <label>Dependencies</label>
  {Object.keys(dependencies).map((dep) => (
    <div key={dep} className="checkbox-container">
      <input
        type="checkbox"
        name={dep}
        checked={dependencies[dep]}
        onChange={handleDependencyChange}
      />
      <span>{dep}</span> 
    </div>
  ))}
</div>

        <div>
          <label>Databases</label>
          <div>
            <input
              type="checkbox"
              checked={mockDatabase}
              onChange={handleMockDatabaseChange}
            />
            I want to mock databases
          </div>
          <div>
            <input
              type="checkbox"
              checked={!mockDatabase}
              onChange={() => setMockDatabase(!mockDatabase)}
            />
            I don't want to mock database
          </div>
        </div>

        <div>
          <label>Database Configurations</label>
          <div>
            <input
              type="text"
              name="user"
              placeholder="Database User"
              value={dbConfig.user}
              onChange={handleDbConfigChange}
              disabled={mockDatabase} 
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Database Password"
              value={dbConfig.password}
              onChange={handleDbConfigChange}
              disabled={mockDatabase} 
            />
          </div>
          <div>
            <input
              type="text"
              name="hostname"
              placeholder="Database Hostname"
              value={dbConfig.hostname}
              onChange={handleDbConfigChange}
              disabled={mockDatabase} 
            />
          </div>
          
        </div>
        

        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default CartCampaign;
