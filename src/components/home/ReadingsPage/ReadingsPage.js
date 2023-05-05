import React from 'react';
import './ReadingsPage.css';
import SafeReadings  from './Readings/safeReadings.js';
import DangerReadings from './DANGERS/DangerReadings';
import Footer from '../../navigation/Footer/Footer';

function ReadingsPage() {
  const readingNames = [
    {name:"plantation-one"}
    //add another one if needed
  ];


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
      {readingNames.map((data) => (
        <div className='section--one' key={data.name}>
          <div className='Main--reading--div'>
            <DangerReadings ReadingName={data.name} />
          </div>
          <div className='Main--reading--div'>
            <SafeReadings ReadingName={data.name}/>
          </div>
        </div>
      ))}
      <div className="Footer">
        <Footer/>
      </div>

    </div>
    )
}

export default ReadingsPage;

