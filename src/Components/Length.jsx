import React, { useState } from 'react'
import './CSS/styleSheet.css'
import { Col, Container, Row } from 'react-bootstrap'
import convert from 'convert-units';

const Length =() =>{

    const [lengthValue, setLengthValue] = useState();
    const [fromUnit, setFromUnit] = useState('m');
    const [toUnit, setToUnit] = useState('km');
    const [result, setResult] = useState();

    const lengthUnits = [

        //Conversion rate:
        // Meter (1)= KiloMeter (0.001) = Inches (39.37) = Centimeters (100) = Feet (3.28) = Yard (1.093)
        { label: 'Meter', value: 'm' },
        { label: 'KiloMeter', value: 'km' },
        { label: 'Inches', value: 'in' },
        { label: 'Centimeters', value: 'cm' },
        { label: 'Feet', value: 'ft' },
        { label: 'Yard', value: 'yd' },
      ];


    const handleConversion = () => {

        if(lengthValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(lengthValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else {
            alert("Enter the Length Or Select differet conversion Unit")
            setToUnit('')
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Length Conversion</h1>

      <div>
        
      <label className='label'> From: </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the Lenght'
        value={lengthValue} 
        onChange={(e)=> setLengthValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {lengthUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To: </label>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {lengthUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>
   
        <div className='conversionRateArea'>
        <h3>Length Conversion Rate</h3>
        <h3 className='conversionRate'>Meter (1)= KiloMeter (0.001) = Inches (39.37) = Centimeters (100) = Feet (3.28) = Yard (1.093)</h3>
      </div>
    </div>
  )
}
export default Length;