import React from "react";

function NavBar ( {handleLoginClick}) {

    const handleClick = () => {
        handleLoginClick()
    }
    return (
        <div>
            <span onClick={handleClick} className="login-icon" > Log in  </span>

        </div>
    );
}

export default NavBar;