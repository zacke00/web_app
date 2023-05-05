import react from 'react';
import LiveData from './LiveData/Livedata';
import "./Dashboard.css"
import Footer from '../../navigation/Footer/Footer';

function Dashboard() {
    const topic = "controller/plantation-one/topic"
    // example of another topic
    // const topic2 = "controller/NEW NAME/topic"
    
    // add another topic for a new controller if needed more than one
    return (
        <div>
            <div className='header-div-dashboard'>

            </div>
        <div className='outer-div-dashboard'>
            <div className='body-dashboard'>
            <LiveData topic={topic} /> 
            <LiveData topic={topic} /> 
            {/* if you want more than one data with a new topic
            Add another <LiveData topic={topic2}/>
            */}

            </div>

            <div className='display-statistics'>
                <div className='display-statistics-inner-div'>
                
                </div>
            </div>
        </div>
        <div className="Footer">
        <Footer/>
        </div>
        </div>
    )
}  

export default Dashboard;
