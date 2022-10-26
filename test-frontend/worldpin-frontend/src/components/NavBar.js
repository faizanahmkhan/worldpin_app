import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";

function NavBar({ handleLoginClick, handleRegisterClick, loggedInUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    handleLoginClick();
  };

  const handlePress = () => {
    handleRegisterClick();
  };

  useEffect(() => {
    checkStorage();
    return () => {};
  }, [isLoggedIn]);
  function checkStorage() {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          {!loggedInUser ? (
          <span onClick={handleClick} className="login-icon">  <Button color="inherit" >Login</Button></span>
          ) : (
            <span onClick={handleClick} className="login-icon"><Button onClick={logout} color="inherit" > Logout </Button></span>
          )}
          <span onClick={handlePress} className="register-icon">
            {" "}
            Register{" "}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
