import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {storage} from "./firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

const InfoForm = ({postPin, addPinToUser, isPinPopped, onlineUser, markers, setIsPinPopped}) => {

    const [description, setDescription] = useState("")
    const [date, setDate ] = useState ({})

    const handlePinSubmit = async (imageUrl) => {
    
        let location = markers[markers.length -1]
        let newPin = {

            image: imageUrl,
            description: description,
            date: date,
            location: location.lat + "," + location.lng, 
            user: onlineUser.name
        }
        let savedPin = await postPin(newPin)
        addPinToUser(onlineUser.id, savedPin.id)
        setIsPinPopped(false)
        console.log(location.lat);
    console.log(savedPin);
    }

  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])  
  const imageListRef = ref(storage, "images/")

  const uploadImage = (event) => {
    event.preventDefault();
    
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
     getDownloadURL(snapshot.ref).then((url) => {
     handlePinSubmit(url) 

    })
    })
};


  useEffect(() => {
    listAll(imageListRef).then((response) =>{
        response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
                setImageList((prev) => [...prev, url]);
            });
        });
    });
  },[])

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
                                onChange={(event) => {setImageUpload(event.target.files[0])}} 
                            />
                            
                            <br></br>
                            <label>Pin Description</label>
                            <br></br>
                            <input
                                className="login-box"
                                type="text"
                                name="name"
                                placeholder="Pin Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            
                            <label>Date</label>
                            <br></br>
                            <input 
                                type="date" 
                                id="start" 
                                name="trip-start"
                                min="01-01-1990" 
                                max="01-01-2030"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <button
                            onClick={uploadImage}
                            className="login-btn"
                            >Add pin</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
       
export default InfoForm;