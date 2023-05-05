import react from 'react';
import LiveData from './LiveData/Livedata';
import "./Dashboard.css"
import Footer from '../../navigation/Footer/Footer';

function Dashboard() {
    const topic = "my/test/topic"
    return (
        <div>
            <div className='header-div-dashboard'>

            </div>
        <div className='outer-div-dashboard'>
            <div className='body-dashboard'>
            <LiveData topic={topic} />

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
