import React, { ChangeEvent, useState } from 'react';
import './Facts.css';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Analysis from '../Analysis/Analysis';


//This is the main collection of the Facts
//We then use facts to call the child analysis who processes the facts and decides which property worka
function Facts() {


    
  const [zoneValue, setZoneValue] = useState(1);
  const [sizeValue, setSizeValue] = useState(0);
  const [floodValue, setFloodValue] = useState(false);
  const [numberValid, setNumberValid] = useState(false); 
  
    //Listens to input handler for size and assigns size to state.
  const handleSizeInputChange = (event: ChangeEvent<HTMLInputElement>) => { 
      setSizeValue(parseInt(event.target.value));
      console.log(+event.target.value); 
      if(isNaN(+event.target.value)) { 
        setNumberValid(false);
      }
      else { 
        setNumberValid(true);
      }
    }

  

    //handler for when the check box for flood is changed
    const handleFloodInputChange = () => { 
      setFloodValue(!floodValue);
    }

    return (
      <div className='Facts__Main'> 
        <div className='Facts__PropertyFacts'>
          <h3> Propery Facts </h3>
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
              className='Facts__DropDown'
            />
            </>
          </div>

          <div> 
            <p>Please enter the size of your property in meters squared </p>
              <label>
                  <input type="text" name="property__size" onChange={handleSizeInputChange} className='Facts__Size__Input' />
                  {!numberValid && <p> Number not valid </p> } 
              </label>
          </div>
          <div> 
            <p> Is the house in a flooding zone <input type="checkbox" checked = {floodValue} onChange={handleFloodInputChange}/> </p>
          </div>
          
        </div>
        <Analysis id={1} floodValue={floodValue} sizeValue={sizeValue} zoneValue={zoneValue} numberValid = {numberValid}/>
      </div>
    
  );
}

export default Facts;
