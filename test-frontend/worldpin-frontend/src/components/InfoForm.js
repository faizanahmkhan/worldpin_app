import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'

const InfoForm = ({postPin, addPinToUser, isPinPopped}) => {

//   const [value, onChange] = useState(new Date());

  

return (
    <>
        <div className="overlay">
            <div className={`${!isPinPopped ? "active" : ""} show `}>
                <div className="login-form">
                    <div className="form-box solid">
                        <form>
                            <h2 className="login-text">Pin Form</h2>
                            <br></br>
                            <label>Add Image</label>
                            <br></br>
                            <input
                                className="login-box"
                                type="file" id="myFile" name="filename"
                            
                            />
                            <label>Pin Description</label>
                            <br></br>
                            <input
                                className="login-box"
                                type="text"
                                name="name"
                            />
                            <label>Date</label>
                            <br></br>
                            <input type="date" id="start" name="trip-start"
                            value="2022-10-10"
                            min="1990-01-01" max="2030-01-01"
                            />
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