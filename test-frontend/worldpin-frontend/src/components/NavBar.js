import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";

function NavBar({ handleLoginClick, handleRegisterClick, loggedInUser, logo, onlineUser, logout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    handleLoginClick();
  };

  const handlePress = () => {
    handleRegisterClick();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {/* <AppBar>
        <Toolbar> */}
          {!onlineUser ? (
            <span onClick={handleClick} className="login-icon">  <Button color="inherit" >Login</Button></span>
          ) : (
            <span onClick={handleLogout} className="login-icon"><Button color="inherit" > Logout </Button></span>
          )}
          <span onClick={handlePress} className="register-icon">{" "}REGISTER{" "}</span>
        {/* </Toolbar>
      </AppBar> */}
    </div>
  );
}

export default NavBar;
