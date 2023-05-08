import React from 'react';
import LiveData from './LiveData/Livedata';
import "./Dashboard.css"
import Footer from '../../navigation/Footer/Footer';
import SideInfo from './LiveData/Sideinformation/SideInfo';

function Dashboard() {
  const Topics = ["controller/plantation-one/Topic"];
//add another one if needed
    return (
      <div>
        <div className="header-div-dashboard"></div>
  
        <div className="outer-div-dashboard">
          <div className="body-dashboard">
            {Topics.map((data) => (
              <LiveData key={data.Topic} Topic={data.Topic} />
            ))}
          </div>
  
          <div className="side-info-dashboard">
            <div className="side-info-wrapper">
              <SideInfo />
            </div>
          </div>
        </div>
  
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
}  

export default Dashboard;