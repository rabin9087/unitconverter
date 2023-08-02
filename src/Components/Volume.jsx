import React, { useState } from 'react'
import './CSS/styleSheet.css'
import convert from 'convert-units';

 const Volume = () => {
    const [volumeValue, setvolumeValue] = useState();
    const [fromUnit, setFromUnit] = useState('m3');
    const [toUnit, setToUnit] = useState('km3');
    const [result, setResult] = useState();

    const volumeUnits = [

        //Conversion rate:
        // Cubic Meter (1)= Cubic KiloMeter (1e-9) = Cubic Inches (61023.744) = Cubic Centimeters (1000000) = Cubic Feet (35.3146) = Cubic Yard (1.307) = Liter (1000)
        { label: 'Cubic Meter', value: 'm3' },
        { label: 'Cubic KiloMeter', value: 'km3' },
        { label: 'Liter', value: 'l' },
        { label: 'Cubic Inches', value: 'in3' },
        { label: 'Cubic Centimeters', value: 'cm3' },
        { label: 'Cubic Feet', value: 'ft3' },
        { label: 'Cubic Yard', value: 'yd3' },
    
      ];


    const handleConversion = () => {

        if(volumeValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(volumeValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else{
            alert("Enter the volume Or Select differet conversion Unit")
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Volume Conversion</h1>

      <div >
      <label className='label'> From </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the Volume'
        value={volumeValue} 
        onChange={(e)=> setvolumeValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {volumeUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {volumeUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>
   
        <div className='conversionRateArea'>
        <h3>Volume Conversion Rate</h3>
        <h3 className='conversionRate'>Cubic Meter (1)= Cubic KiloMeter (1e-9) = Cubic Inches (61023.744) </h3>
        <h3 className='conversionRate'>= Cubic Centimeters (1000000) = Cubic Feet (35.3146) = Cubic Yard (1.307) = Liter (1000)</h3>
      </div>
    </div>
  )
}
export default Volume;