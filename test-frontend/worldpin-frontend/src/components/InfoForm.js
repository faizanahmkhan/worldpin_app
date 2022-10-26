import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import User from "./User";


const InfoForm = ({postPin, addPinToUser, isPinPopped, onlineUser}) => {

//   const [value, onChange] = useState(new Date());

    const [newPin, setNewPin] = useState({
        image: Image,
        description: "",
        date: Date,
        location: "",
        user: User.name
    })

    const handlePinChange = event => {
        let propertyName = event.target.name
        let savedPin = {...newPin}
        savedPin[propertyName] = event.target.value
        setNewPin(savedPin)
    console.log(savedPin);
    }

    const handlePinSubmit = event => {
        event.preventDefault();
        postPin(newPin)
        addPinToUser(onlineUser.id, newPin.id)
        setNewPin({
            image: Image,
            description: "",
            date: Date,
            location: "",
            user: User.name
        })
    console.log(newPin);
    }

return (
    <>
        <div className="overlay">
            <div className={`${!isPinPopped ? "active" : ""} show `}>
                <div className="login-form">
                    <div className="form-box solid">
                        <form onSubmit={handlePinSubmit}>
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
                                placeholder="Pin Description"
                                onChange={handlePinChange}
                            />
                            
                            <label>Date</label>
                            <br></br>
                            <input 
                                type="date" 
                                id="start" 
                                name="trip-start"
                                min="01-01-1990" 
                                max="01-01-2030"
                                onChange={handlePinChange}
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