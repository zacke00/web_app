import './style/css/App.css';
import SafeReadings  from './Readings/safeReadings.js';
import DangerReadings from './DANGERS/DangerReadings';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <div className='section--one'>
        <div className='Danger--reading--div'>
        <DangerReadings />
        </div>
        <div className='safe--reading--div'>
        <SafeReadings />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
