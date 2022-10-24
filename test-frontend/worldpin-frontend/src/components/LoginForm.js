import React from "react";
import './LoginForm.css';

const LoginForm = ({ isLogin }) => {

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