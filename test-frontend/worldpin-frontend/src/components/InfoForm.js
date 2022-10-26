import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import {storage} from "./firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

const InfoForm = ({}) => {

  const [pinSet, isPinSet] =useState(false);
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
            <div className={`${!isPinSet ? "active" : ""} show `}>
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
                            />
                            <label>Date</label>
                            <br></br>
                            <input type="date" id="start" name="trip-start"
                            value="2022-10-10"
                            min="1990-01-01" max="2030-01-01"
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