import './style/css/App.css';
import SafeReadings  from './components/home/Readings/safeReadings.js';
import DangerReadings from './components/home/DANGERS/DangerReadings';
import NavigationBar from './components/navigation/NavigationBar/NavigationBar';
import Footer from './components/navigation/Footer/Footer';


function App() {

  return (
    <div className="App">
      
      <header>

      <div className='headline'>
        <div className='healine-container'>
        <h2 className='headlineH2'>React App</h2>
        <h2 className='headlineH2'>Home</h2>

        </div>
      </div>
      </header>
      <div>
        <NavigationBar/>
      </div>
      <div className='section--one'>
        <div className='Main--reading--div'>
        <DangerReadings />
        </div>
        <div className='Main--reading--div'>
        <SafeReadings />
        </div>
        
      </div>
      <footer className='Footer'>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
