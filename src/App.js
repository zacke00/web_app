import './style/css/App.css';
import SafeReadings  from './Readings/safeReadings.js';
import DangerReadings from './DANGERS/DangerReadings';

function App() {
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
