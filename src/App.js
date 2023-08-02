import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Length from './Components/Length';
import Area from './Components/Area';
import Volume from './Components/Volume';
import Weight from './Components/Weight';
import Temperature from './Components/Temperature';
import Time from './Components/Time';

function App() {
  return (
    <div className="App">
      <h1 style={{paddingTop:'20px'}}>UNIT CONVERTER</h1>
      
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Length/>}/>
      <Route path='/area' element={<Area/>}/>
      <Route path='/volume' element={<Volume/>}/>
      <Route path='/weight' element={<Weight/>}/>
      <Route path='/temperatue' element={<Temperature/>}/>
      <Route path='/time' element={<Time/>}/>
     </Routes>
     </BrowserRouter>
     

    </div>
  );
}

export default App;
