import React, { ChangeEvent, useState } from 'react';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import './Analysis.css'; 


//This analysis section takes the props from and processes theam to decide if they meet the requirements
//and what type of house they can do
type Props = {floodValue: boolean, sizeValue: number, zoneValue: number, numberValid: boolean, id: number}
function Analysis(props: Props) {
    //Defining the props for ease of use
    const floodValue = props.floodValue;
    const sizeValue = props.sizeValue;
    const zoneValue = props.zoneValue;
    const isDisabled = !props.numberValid;
    const id = props.id;
    //Creating a state for the dynamic array that holds the available properties
    const [availableProperties, setAvailableProperties] = useState<string[]>([]);

    //Confirm details changes the state of the array and provives a popup so that users can see 
    //that they have definitely entered the right details
    const confirmDetails = (size: number, zone: number, flooding: boolean) =>  {
        
        //Changing the bool for flooding into readable english
        var isInFloodingZone: string;
        if(flooding){
            isInFloodingZone = 'Is in a flooding zone';
        }
        else { 
          isInFloodingZone = 'Is not in a flooding zone';
        }
        alert('Processing with the following details \n' + size + ' Meters Squared ' + '\n' + zone + '\n' + isInFloodingZone);
        //clears the previous list so that the new properties can be added. 
        setAvailableProperties([]);
        propertyFactCheckHandler();
      }
    
    //double check if this way of updating is safer
    //setAvailableProperties((prevState -> { return { ...prevState, "No properties can be added to a flood zone."}}))
    const propertyFactCheckHandler = () => { 
        if(floodValue){
            setAvailableProperties(current => [...current, "No properties can be added to a flood zone."]);
        }
        else { 
            if(zoneValue == 1 || zoneValue == 2){ 
                setAvailableProperties(current => [...current, "Single Dwelling House"]);
                
            }
            if((zoneValue == 2 || zoneValue == 3) && props.sizeValue >= 500){ 
                setAvailableProperties(current => [...current, "Apartment Property"]);
            }
            if(zoneValue == 3 && sizeValue >= 1000){
                setAvailableProperties(current => [...current, "Commerical Property"]);
            }
        }
    }

  return (
    <div className='Analysis__Main'> 
     <button name='submitButton' onClick={() => confirmDetails(sizeValue, zoneValue, floodValue)} className='Analysis__Submit__Button' disabled={isDisabled}>Confirm</button>
     <hr></hr>
        <h3> Analysis Results</h3>
        <p> Based on your property facts, the allowed buildings may be built on your property</p>
        <ul data-testid={`analysis-${id}`} className='Analysis__List' >
          {availableProperties.map(type => (<li>{type}</li>))}
        </ul>
    </div>
    
  );
}



export default Analysis;
