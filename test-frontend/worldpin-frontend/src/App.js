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

  const [isLoggedIn, setIsLoggedIn] = useState(false);



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

  const loggedInUser = async ({ name }) => {
    const response = await fetch(`http://localhost:8080/users/${name}`)
    const selectedUser = await response.json()
    setOnlineUser(selectedUser[0])

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
    const response = await fetch(`http://localhost:80080/${userId}/${pinId}`, {
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
    localStorage.setItem('user','id');
  }

  const handleRegisterClick = () => {
    setIsRegister((isRegister) => !isRegister)
  }

  useEffect(() => {
    checkStorage();
    return () => { };
  }, [isLoggedIn]);
  function checkStorage() {
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };
  return (

    <BrowserRouter>
      <NavBar loggedInUser={loggedInUser} 
      logout={logout} onlineUser={onlineUser} 
      postUser={postUser} handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
      <LoginForm onlineUser={onlineUser} isLogin={isLogin} isRegister={isRegister} postUser={postUser} loggedInUser={loggedInUser} />
      <Maps pins={pins} users={users} postPin={postPin} addPinToUser={addPinToUser} onlineUser={onlineUser}></Maps>
      <UserContainer onlineUser={onlineUser} loggedInUser={loggedInUser} users={users} postUser={postUser} userPins={userPins} />
    </BrowserRouter>


  )
}
export default App;
