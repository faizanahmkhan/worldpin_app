import React from "react";
import './LoginForm.css';

const LoginForm = ({isLogin}) => {

return (
    <>
    <div className={`${!isLogin ? "active" : ""} show `}>
        <form>
            <h1 className="login-text">Sign in</h1>
            <label>Username</label>
            <br></br>
            <input 
                className="login-box"
                type="text"
                name="username"
                />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn"/>


        </form>


    </div>
    
    
    </>
)

}
export default LoginForm;