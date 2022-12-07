import React, { ChangeEvent, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";


//This analysis section takes the props from and processes theam to decide if they meet the requirements
//and what type of house they can do
function Analysis(props: any) {

    const floodValue = props.floodValue;
    const sizeValue = props.sizeValue;
    const zoneValue = props.zoneValue;
    const id = props.id;
    const [availableProperties, setAvailableProperties] = useState<string[]>([]);
    
    console.log(floodValue + " and " +  sizeValue + " and " + zoneValue)

    const confirmDetails = (size: number, zone: number, flooding: boolean) =>  {
        var isInFloodingZone: string;
        if(flooding){
        isInFloodingZone = 'Is in a flooding zone';
        }
        else { 
          isInFloodingZone = 'Is not in a flooding zone';
        }
        alert('Processing with the following details \n' + size + ' Meters Squared ' + '\n' + zone + '\n' + isInFloodingZone);
        setAvailableProperties([]);
        propertyFactCheckHandler();
      }

    const propertyFactCheckHandler = () => { 
        if(floodValue){
            setAvailableProperties(current => [...current, "No properties can be added to a flood zone."]);
        }
        else { 
            if(zoneValue == 1 || zoneValue == 2){ 
                setAvailableProperties(current => [...current, "Single Dwelling House"]);
                
            }
            if(zoneValue == 2 || zoneValue == 3 && props.sizeValue >= 500){ 
                setAvailableProperties(current => [...current, "Apartment Property"]);
            }
            if(zoneValue == 3 && sizeValue >= 1000){
                setAvailableProperties(current => [...current, "Commerical Property"]);
            }
        }
    }

  return (
    <div> 
        <button name='submitButton' onClick={() => confirmDetails(sizeValue, zoneValue, floodValue)}>Confirm</button>
        <p> Based on your property facts, the allowed buildings may be built on your property</p>
        <ol data-testid={`analysis-${id}`}>
          {availableProperties.map(type => (<li>{type}</li>))}
        </ol>

    </div>
    
  );
}



export default Analysis;
