import React from 'react';
import LiveData from './LiveData/Livedata';
import "./Dashboard.css"
import Footer from '../../navigation/Footer/Footer';

function Dashboard() {
  const topics = [
    "controller/plantation-one/topic"
    //add another one if needed
    ];

  return (
    <div>
      <div className='header-div-dashboard'></div>

      <div className='outer-div-dashboard'>
        <div className='body-dashboard'>
          {topics.map((data) => (
            <LiveData key={data.topic} topic={data.topic} />
          ))}
        </div>

        <div className='display-statistics'>
          <div className='display-statistics-inner-div'></div>
        </div>
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}  

export default Dashboard;