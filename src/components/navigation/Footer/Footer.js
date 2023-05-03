import React ,{ useState, useEffect} from "react";
import './Footer.css'

function Footer() {

    return (
        <div className="container">

        <div className="Footer-container">
            <section className="Footer-section">
            <nav className="Footer-nav">
                <ul className="Footer-ul">
                    <li>
                        <div className="icon-fake-div">
                            <div className="icon-Facebook"></div>
                        <p style={{color:"black"}}>FAKEbook</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon-fake-div">
                            <div className="icon-Instagram"></div>
                        <p style={{color:"black"}}>InstaMilligram</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon-fake-div">
                            <div className="icon-Twitter"></div>
                        <p style={{color:"black"}}>Twatter</p>
                        </div>
                    </li>
                </ul>
            </nav>
                
            </section>
        </div>
        </div>
    )
}

export default Footer;