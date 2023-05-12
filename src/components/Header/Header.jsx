import { useState } from "react";

import logo from "../../assets/images/logo.svg";
import css from "./header.css";

const Header = () => {

    let [activeState, setActiveState] = useState(false);

    return(
        <>
            <div className="container">
                <div className="header_content">
                    <div className="header_logo">
                        <img src={logo} alt="logo" className="header_logo_img" />
                    </div>
                    <div  className={`header_nav ${activeState && 'header_nav_active'}`}>
                        <div className="header_links">
                            <a href="#!" className="header_link">Features</a>
                            <a href="#!" className="header_link">Pricing</a>
                            <a href="#!" className="header_link">Resources</a>
                        </div>
                        <div className="header_buttons_mobile">
                            <a href="#!" className="header_link">Login</a>
                            <button className="button header_button">Sign Up</button>
                        </div>
                        <div onClick={ () => setActiveState(activeState = !activeState)} className='header_nav_close'>
                            <span className='header_nav_close_line'></span>
                            <span className='header_nav_close_line'></span>
                        </div>
                    </div>
                    <div className="header_buttons">
                        <a href="#!" className="header_link">Login</a>
                        <button className="button header_button">Sign Up</button>
                    </div>
                    <div onClick={ () => setActiveState(activeState = !activeState) } className='header_burger'>
                        <span className='burger_line burger_line_first'></span>
                        <span className='burger_line burger_line_second'></span>
                        <span className='burger_line burger_line_third'></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header