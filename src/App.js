import logo from './logo.svg';
import './App.css';
import SafeReadings  from './components/safeReadings.js';
import DangerReadings from './components/DangerReadings';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      
        <SafeReadings />
        <DangerReadings />
      
    </div>
  );
}

export default App;
