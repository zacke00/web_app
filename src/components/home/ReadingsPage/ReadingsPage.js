import React from 'react';
import './ReadingsPage.css';
import SafeReadings  from '../Readings/safeReadings.js';
import DangerReadings from '../DANGERS/DangerReadings';
import Footer from '../../navigation/Footer/Footer';

function ReadingsPage() {
    return(
    <div className="ReadingsPage">
        <header>

      <div className='headline'>
        <div className='healine-container'>
        <h2 className='headlineH2'>React App</h2>
        <h2 className='headlineH2'>Home</h2>

        </div>
        </div>
      </header>
      <div className='section--one'>
        <div className='Main--reading--div'>
            <DangerReadings />
        </div>
        <div className='Main--reading--div'>
            <SafeReadings />
        </div>
      </div>
      <div className="Footer">
        <Footer/>
      </div>

    </div>
    )
}

export default ReadingsPage;

