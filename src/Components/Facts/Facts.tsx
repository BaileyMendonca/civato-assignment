import React, { ChangeEvent, useState } from 'react';
import './Facts.css';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";


//This is the main collection of the Facts
//This components only purpose is to ensure the correct layout of our comps
function Facts() {

  const [zoneValue, setZoneValue] = useState(1);
  const [sizeValue, setSizeValue] = useState(0);
  const [floodVlaue, setFloodValue] = useState(false);
 
 const handleSizeInputChange = (event: ChangeEvent<HTMLInputElement>) => { 
    setSizeValue(parseInt(event.target.value));
  }

  const handleFloodInputChange = () => { 
    setFloodValue(!floodVlaue);
  }

  const confirmDetails = (size: number, zone: number, flooding: boolean) =>  {
    var isInFloodingZone: string;
    if(flooding){
    isInFloodingZone = 'Is in a flooding zone';
    }
    else { 
      isInFloodingZone = 'Is not in a flooding zone';
    }
    alert('Processing with the following details \n' + size + ' Meters Squared ' + '\n' + zone + '\n' + isInFloodingZone);
  }

  return (
    <div> 
        <div> 
          <p> What zone is your house in </p>
          <>
          <DropdownList
          defaultValue="Please select a zone"
          value={zoneValue}
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
        <p> Is the house in a flooding zone <input type="checkbox" checked = {floodVlaue} onChange={handleFloodInputChange}/> </p>
      </div>
      <button onClick={() => confirmDetails(sizeValue, zoneValue, floodVlaue)}>  Confirm </button>
    </div>
    
  );
}

export default Facts;
