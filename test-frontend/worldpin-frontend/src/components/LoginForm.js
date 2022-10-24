import React from "react";
import './LoginForm.css';
import './User.js';
import { useState } from "react";

const LoginForm = ({ isLogin, users, loggedInUser, postUser }) => {

    const [chosenUser, setChosenUser] = useState({
        location: ""
    })

    const handleChange = event => {
        const userId = parseInt(event.target.value);
        const selectedUser = users.find(user => user.userId === userId);
        setChosenUser(selectedUser)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        loggedInUser(chosenUser);
        setChosenUser({
            location: ""
        })
    }

    const UserOptions = users ? users.map((user) => {
        return <option key={user.userId} value={user.userId}>{user.name}</option>
    }) : []

    const handleClick = () => { }

    return (
        <>
            <div className="overlay">
                <div className={`${!isLogin ? "active" : ""} show `}>
                    <div className="login-form">
                        <div className="form-box solid">
                            <form>
                                <h2 className="login-text">Sign in</h2>
                                <label>Username</label>
                                <br></br>
                                <input
                                    className="login-box"
                                    type="text"
                                    name="username"
                                />
                                <br></br>
                                <input type="submit" value="LOGIN" className="login-btn" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default LoginForm;