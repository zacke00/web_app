import react from 'react';
import LiveData from './LiveData/Livedata';
import "./Dashboard.css"
import Footer from '../../navigation/Footer/Footer';

function Dashboard() {
    return (
        <div>
        <div className='body'>
            <h1>Dashboard</h1>
            <LiveData />

        </div>
        <div className="Footer">
        <Footer/>
        </div>
        </div>
    )
}  

export default Dashboard;
