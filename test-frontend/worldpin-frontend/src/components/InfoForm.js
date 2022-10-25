import { useState } from "react";

const InfoForm = ({}) => {

const [pinSet, isPinSet] =useState(false);

return (
    <>
        <div className="overlay">
            <div className={`${!isPinSet ? "active" : ""} show `}>
                <div className="login-form">
                    <div className="form-box solid">
                        <form>
                            <h2 className="login-text">Pin Form</h2>
                            <label>Fill in Pin</label>
                            <br></br>
                            <input
                                className="login-box"
                                type="text"
                                name="name"
                            />
                            <br></br>
                            <input type="submit" value="Add Pin" className="login-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
        export default InfoForm;