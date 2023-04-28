import react from 'react';
import './Home.css';
import Footer from '../navigation/Footer/Footer.js';

function Home() {

    return(
            <div>
        <div className="Home">
                <div className="pointer-for-nav-bar-outline-div">
                    <div className="pointer-for-nav-bar">

                    </div>
                </div>
            <div className="home-welcome">
                <div className="home-background-welcome-header">
            <h1 className="home-welcome-h1">Welcome!</h1>

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