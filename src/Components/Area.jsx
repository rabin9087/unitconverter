import React, { useState } from 'react'
import './CSS/styleSheet.css'
import convert from 'convert-units';

const Area = () => {
    const [areaValue, setAreaValue] = useState();
    const [fromUnit, setFromUnit] = useState('m2');
    const [toUnit, setToUnit] = useState('km2');
    const [result, setResult] = useState();

    const areaUnits = [
        //Conversion rate:
        // Square Meter (1)= Square KiloMeter (0.000001) = Square Inches (1550.0031) = Square Centimeters (10000) = Square Feet (10.7639) = Square Yard (1.1959)
        { label: 'Square Meter', value: 'm2' },
        { label: 'Square KiloMeter', value: 'km2' },
        { label: 'Square Inches', value: 'in2' },
        { label: 'Square Centimeters', value: 'cm2' },
        { label: 'Square Feet', value: 'ft2' },
        { label: 'Square Yard', value: 'yd2' },
      ];


    const handleConversion = () => {

        if(areaValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(areaValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else{
            alert("Enter the Length Or Select differet conversion Unit")
            setToUnit('')
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Area Conversion</h1>

      <div >
      <label className='label'> From </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the Area'
        value={areaValue} 
        onChange={(e)=> setAreaValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {areaUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To</label>  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {areaUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>
   
        <div className='conversionRateArea'>
        <h3>Area Conversion Rate</h3>
        <h3 className='conversionRate'>Square Meter (1)= Square KiloMeter (0.000001) = Square Inches (1550.0031) </h3>
        <h3 className='conversionRate'>= Square Centimeters (10000) = Square Feet (10.7639) = Square Yard (1.1959</h3>)
      </div>
    </div>
  )
}
export default Area;