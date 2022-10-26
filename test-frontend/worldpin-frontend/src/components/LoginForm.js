import React from "react";
import './LoginForm.css';
import './User.js';
import { useState } from "react";

const LoginForm = ({ isLogin, users, loggedInUser, postUser, isRegister }) => {

    const [userName, setUserName] = useState("");
    const [chosenUser, setChosenUser] = useState({
        name: "",
        pins: []
    });

    const [clicked, setClicked] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        pins: []
    });


    const handleFormSubmit = event => {
        event.preventDefault();
        let newChosenUser = {
            name: userName,
            pins: []
        }
        setChosenUser(newChosenUser);
        loggedInUser(newChosenUser);
        console.log(newChosenUser);
    }

    const handleRegisterChange = event => {
        const propertyName = event.target.name
        const savedUser = {...newUser}
        savedUser[propertyName] = event.target.value
        setNewUser(savedUser)
        console.log(savedUser);
    }

    const handleRegisterSubmit = event => {
        event.preventDefault();
        postUser(newUser)
        setNewUser({
            name:"",
            pins: []
        })
       console.log(newUser);
    }
   
    const handleRegisterClick = () => {
        setClicked(true)
        
    }

    const handleLogInClick = () => {
        setClicked(false)
    }


    const handleClick = () => { }

    return (
        <>
            <div className="overlay">
                <div className={`${!isLogin ? "active" : ""} show `}>
                    <div className="login-form">
                        <div className="form-box solid">
                            <form onSubmit={handleFormSubmit}>
                                <h2 className="login-text">Sign in</h2>
                                <label>Username</label>
                                <br></br>
                                <input
                                    className="login-box"
                                    type="text"
                                    name="name"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <br></br>
                                <input type="submit" value="LOGIN" className="login-btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overlay">
                <div className={`${!isRegister ? "active" : ""} show `}>
                    <div className="login-form">
                        <div className="form-box solid">
                            <form onSubmit={handleRegisterSubmit}>
                                <h2 className="login-text">Register</h2>
                                <label>Username</label>
                                <br></br>
                                <input
                                    className="login-box"
                                    type="text"
                                    name="name"
                                    onChange={handleRegisterChange} 
                                />
                                <br></br>
                                <input type="submit" value="REGISTER" className="login-btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default LoginForm;