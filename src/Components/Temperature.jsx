import React, { useState } from 'react'
import './CSS/styleSheet.css'
import convert from 'convert-units';

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState();
    const [fromUnit, setFromUnit] = useState('C');
    const [toUnit, setToUnit] = useState('K');
    const [result, setResult] = useState();

    const temperatureUnits = [

      //Conversion rate:
      // Celsius (1)= Kelvin (274.15) = Fahrenheit (33.8)
        { label: 'Celsius', value: 'C' },
        { label: 'Kelvin', value: 'K' },
        { label: 'Fahrenheit', value: 'F' },
      ];


    const handleConversion = () => {

        if(temperatureValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(temperatureValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else{
            alert("Enter the temperature Or Select differet conversion Unit")
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Temperature Conversion</h1>

      <div >
      <label className='label'> From </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the temperature'
        value={temperatureValue} 
        onChange={(e)=> setTemperatureValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {temperatureUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {temperatureUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>
   
      <div className='conversionRateArea'>
        <h3>Temperature Conversion Rate</h3>
        <h3 className='conversionRate'>Celsius (1)= Kelvin (274.15) = Fahrenheit (33.8)</h3>
      </div>
      
    </div>
  )
}
export default Temperature; 