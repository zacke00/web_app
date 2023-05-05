import react from 'react';
import './Home.css';
import Footer from '../navigation/Footer/Footer.js';


function Home() {

    return(

    <div className='body'>

        <div className="Home-center">
        <div className="Home1">
        <div className="Home2">

                <div className="Home-welcome">
                    <div className="Home-background-welcome-header">
                    
                        <h1 className="Home-welcome-h1">Welcome!</h1>
                    </div>
                </div>
            </div>
        </div>

        </div>
        <div className="Footer">
                <Footer/>
        </div>

    </div>


    )
}

export default Home;