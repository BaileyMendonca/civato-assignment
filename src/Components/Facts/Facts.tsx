import React, { ChangeEvent, useState } from 'react';
import './Facts.css';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Analysis from '../Analysis/Analysis';


//This is the main collection of the Facts
//This components only purpose is to ensure the correct layout of our comps
function Facts() {

  const [zoneValue, setZoneValue] = useState(1);
  const [sizeValue, setSizeValue] = useState(0);
  const [floodValue, setFloodValue] = useState(false);
 
 const handleSizeInputChange = (event: ChangeEvent<HTMLInputElement>) => { 
    setSizeValue(parseInt(event.target.value));
  }

  const handleFloodInputChange = () => { 
    setFloodValue(!floodValue);
  }

  return (
    <div> 
        <div> 
          <p> What zone is your house in </p>
          <>
          <DropdownList
          defaultValue="Please select a zone"
          value={zoneValue}
          dataKey = "id"
          textField="zone"
          onChange={(nextValue) => setZoneValue(nextValue.id)}
          data={[
            {id: 1, zone: "Zone 1" },
            {id: 2, zone: "Zone 2" },
            {id: 3, zone: "Zone 3" },
            ]}
          />
          </>
        </div>

      <div> 
        <p>Please enter the size of your property in meters squared </p>
          <label>
              Size: 
              <input type="text" name="property__size" onChange={handleSizeInputChange} />
          </label>
      </div>

      <div> 
        <p> Is the house in a flooding zone <input type="checkbox" checked = {floodValue} onChange={handleFloodInputChange}/> </p>
      </div>
      <Analysis id={1} floodValue={floodValue} sizeValue={sizeValue} zoneValue={zoneValue}/>
      
    </div>
    
  );
}

export default Facts;
