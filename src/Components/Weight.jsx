import React, { useState } from 'react'
import './CSS/styleSheet.css'
import convert from 'convert-units';
 const Weight = () => {
    const [weightValue, setWeightValue] = useState();
    const [fromUnit, setFromUnit] = useState('g');
    const [toUnit, setToUnit] = useState('kg');
    const [result, setResult] = useState();

    const weightUnits = [
        //Conversion rate:
        // Kilogram (1)= Gram (1000) = Pound (2.2046) = Ounce (35.2739) = Milligram(1000000) = Metric Ton (0.001)
        { label: 'Gram', value: 'g' },
        { label: 'Kilogram', value: 'kg' },
        { label: 'Pound', value: 'lb' },
        { label: 'Ounce', value: 'oz' },
        { label: 'Milligram', value: 'mg' },
        { label: 'Metric Ton', value: 'mt' },
      ];


    const handleConversion = () => {

        if(weightValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(weightValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else{
            alert("Enter the weight Or Select differet conversion Unit")
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Weight Conversion</h1>

      <div >
      <label className='label'> From </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the weight'
        value={weightValue} 
        onChange={(e)=> setWeightValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {weightUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {weightUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>
        <div className='conversionRateArea'>
        <h3>Weight Conversion Rate</h3>
        <h3 className='conversionRate'>Kilogram (1)= Gram (1000) = Pound (2.2046) = Ounce (35.2739) = Milligram(1000000) = Metric Ton (0.001) </h3>
      </div>
      
    </div>
  )
}
export default Weight;