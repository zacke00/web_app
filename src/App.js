import './style/css/App.css';
import SafeReadings  from './Readings/safeReadings.js';
import DangerReadings from './DANGERS/DangerReadings';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <div className='headline'>
      <h2 className='headlineH2'>React App</h2>
      </div>
      <div className='section--one'>
        <div className='Main--reading--div'>
        <DangerReadings />
        </div>
        <div className='Main--reading--div'>
        <SafeReadings />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
