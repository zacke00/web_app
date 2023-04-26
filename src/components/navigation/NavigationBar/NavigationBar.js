import React, { useEffect,useState} from "react";
import './NavigationBar.css';
function NavigationBar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }
  
    return (
      <div>
        <button className={`Nav-Button ${showMenu ? 'rotate' : ''}`} onClick={toggleMenu}>
            <div className={`div-menu-icon-1 ${showMenu ? 'rotate' : ''}`}></div>
            <div className={`div-menu-icon-2 ${showMenu ? 'remove' : ''}`}></div>
            <div className={`div-menu-icon-3 ${showMenu ? 'rotate' : ''}`}></div>
        </button>
        <div className={`nav-container ${showMenu ? 'show' : ''}`}>
          {showMenu && (
            <nav>
              <ul>
                <li><a href="/"><p>Home</p></a></li>
                <li><a href="/about"><p>About</p></a></li>
                <li><a href="/contact"><p>Contact</p></a></li>
              </ul>
            </nav>
          )}
        </div>
        </div>
    );
  }

export default NavigationBar;