import React, { useState } from 'react'
import './CSS/styleSheet.css'
import convert from 'convert-units';

const Time = () =>{
    const [timeValue, setTimeValue] = useState();
    const [fromUnit, setFromUnit] = useState('h');
    const [toUnit, setToUnit] = useState('s');
    const [result, setResult] = useState();

    const timeUnits = [
        //Conversion rate:
        // Year (1)= Second (31557600) = Minute (525960) = Hour (8766) = Day (365.25) = Week(52.1785) = Month (12)
        { label: 'Second', value: 's' },
        { label: 'Minute', value: 'min' },
        { label: 'Hour', value: 'h' },
        { label: 'Day', value: 'd' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
        { label: 'Year', value: 'year' },
      ];


    const handleConversion = () => {

        if(timeValue !== '' && toUnit !== fromUnit){
            const convertedValue = convert(timeValue).from(fromUnit).to(toUnit);
            setResult(convertedValue);
            
        } else{
            alert("Enter the time Or Select differet conversion Unit")
        }
            
        }

  return (
    <div className='conversionBlock'>
      <h1>Time Conversion</h1>

      <div >
      <label className='label'> From </label>  &nbsp;

        <input className='inputValue' type='number' placeholder='Enter the time'
        value={timeValue} 
        onChange={(e)=> setTimeValue(e.target.value)}/>

        <select className='selectUnitType' value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {timeUnits.map((unit) => (
                <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}

        </select>
      </div>

      
<br />

        <div>
            <label className='label'> To</label> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='inputValue' value={result} placeholder='Results'/>

        <select className='selectUnitType' value={toUnit} onChange={(e) => setToUnit(e.target.value)}>

                {timeUnits.map((unit) => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
            ))}
        
            </select>
        </div>
       
<br />
        <div>
            <button class="convertButton" onClick={handleConversion}>Convert</button>
        </div>

        <div className='conversionRateArea'>
        <h3>Time Conversion Rate</h3>
        <h3 className='conversionRate'>Year (1)= Second (31557600) = Minute (525960) = Hour (8766) = Day (365.25) = Week(52.1785) = Month (12) </h3>
      </div>
      
    </div>
  )
}
export default Time;