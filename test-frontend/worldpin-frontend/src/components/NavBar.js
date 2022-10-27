import React from "react";
import "./NavBar.css";
import {Button,} from "@material-ui/core";

function NavBar({ handleLoginClick, handleRegisterClick, onlineUser, logout }) {

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
          {!onlineUser ? (
            <span onClick={handleClick} className="login-icon">  <Button color="inherit" >Login</Button></span>
          ) : (
            <span onClick={handleLogout} className="login-icon"><Button color="inherit" > Logout </Button></span>
          )}
          <span onClick={handlePress} className="register-icon">{" "}REGISTER{" "}</span>
    </div>
  );
}

export default NavBar;
