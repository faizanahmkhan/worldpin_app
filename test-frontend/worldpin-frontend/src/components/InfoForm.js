import User from "./User";
import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {storage} from "./firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

const InfoForm = ({postPin, addPinToUser, isPinPopped, onlineUser}) => {

//   const [value, onChange] = useState(new Date());
    // const [location, setLocation] = useState("");
    const [description, setDescription] = useState("")
    const [image, setImage] = useState ("");
    const [date, setDate ] = useState ({})

    const [newPin, setNewPin] = useState({
        image: Image,
        description: "",
        date: Date,
        location: "",
        user: onlineUser.name
    })

    const handlePinChange = event => {
        const propertyName = event.target.value
        const savedPin = {...newPin}
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
            user: onlineUser.name
        })
    console.log(newPin);
    }
    
    // const handleFormSubmit = event => {
    //     event.preventDefault();
    //     let newChosenUser = {
    //         name: userName,
    //         pins: []
    //     }
    //     setChosenUser(newChosenUser);
    //     loggedInUser(newChosenUser);
    //     console.log(newChosenUser);
    // }

  const [imageUpload, setImageUpload] = useState(null)
//   const [imageList, setImageList] = useState([])  
//   const imageListRef = ref(storage, "images/")

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then(() => {
        alert("Image UPLOADED")
    })
  };

//   const uploadImage = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//      getDownloadURL(snapshot.ref).then((url) => {
//       setImageList((prev) => [...prev, url])  

//     })
//     })
// };


//   useEffect(() => {
//     listAll(imageListRef).then((response) =>{
//         response.items.forEach((item) => {
//             getDownloadURL(item).then((url) => {
//                 setImageList((prev) => [...prev, url]);
//             });
//         });
//     });
//   },[])

// Images aren't displayed just yet


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
                            <button
                            onClick={uploadImage}
                            onChange={(event) => {setImageUpload(event.target.files[0])}} 
                            >Add image</button>
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
                            <input type="submit" value="Add Pin" className="login-btn"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
        export default InfoForm;