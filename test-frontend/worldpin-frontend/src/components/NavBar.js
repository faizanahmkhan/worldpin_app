import React from "react";
import './NavBar.css';

function NavBar ( {handleLoginClick, handleRegisterClick}) {

    const handleClick = () => {
        handleLoginClick()
    }

    const handlePress = () => {
        handleRegisterClick()
    }

    return (
        <div>
            <span onClick={handleClick} className="login-icon" > Log in  </span>
            <span onClick={handlePress} className="register-icon" > Register  </span>

        </div>
    );
}

export default NavBar;