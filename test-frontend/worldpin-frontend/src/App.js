import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Maps from './Maps';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserContainer from './containers/UserContainer'


function App() {

  const [users, setUsers] = useState([]);
  const [pins, setPins] = useState([]);
  const [onlineUser, setOnlineUser] = useState();
  const [userPins, setUserPins] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const loggedInUser = chosenUser => {
    if (chosenUser.name === "") setOnlineUser()
    setOnlineUser(chosenUser)
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const userData = await response.json();
    setUsers(userData);
  };

  const fetchPins = async () => {
    const response = await fetch("http://localhost:8080/users/pins");
    const pinData = await response.json();
    setPins(pinData)
  };

  const postUser = async newUser => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const savedUser = await response.json()
    setUsers([...users, savedUser])
  };

  const postPin = async (newPin) => {
    const response = await fetch("http://localhost:8080/users/pin", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPin)
    })
    const savedPin = await response.json()
    setPins([...pins, savedPin])
  }

  const addPinToUser = async (userId, pinId) => {
    const response = await fetch (`http://localhost:80080/${userId}/${pinId}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
    })
    const updatedPins = await response.json();
    setUserPins([...updatedPins.pins])
  }

  
  useEffect(() => {
    fetchUsers()
    fetchPins()
  }, [])

 

  const handleLoginClick = () => {
    setIsLogin((isLogin) => !isLogin)
  }

  const handleRegisterClick = () => {
    setIsRegister((isRegister) => !isRegister)
  }


  return (

    <BrowserRouter>
      <NavBar loggedInUser={loggedInUser} postUser={postUser} handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
      <LoginForm isLogin={isLogin} isRegister={isRegister} postUser={postUser} loggedInUser={loggedInUser}/>
      <Maps pins={pins} users={users} postPin={postPin} addPinToUser={addPinToUser}></Maps>
      <Routes>
        <Route path='/account' element={<UserContainer onlineUser={onlineUser} loggedInUser={loggedInUser} users={users} postUser={postUser} userPins={userPins}/>} />
      </Routes>
    </BrowserRouter>


  )
}
export default App;
