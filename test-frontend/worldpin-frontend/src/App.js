import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Maps from './Maps';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserContainer from './containers/UserContainer'


function App() {

  const [users, setUsers] = useState([])
  const [onlineUser, setOnlineUser] = useState()

  const loggedInUser = chosenUser => {
    if (chosenUser.name === "") setOnlineUser()
    setOnlineUser(chosenUser)
  }

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const userData = await response.json();
    setUsers(userData);
  }

  const postUser = async newUser => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const savedUser = await response.json()
    setUsers([...users, savedUser])
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

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
      <Maps></Maps>
      <Routes>
        <Route path='/account' element={<UserContainer onlineUser={onlineUser} loggedInUser={loggedInUser} users={users} postUser={postUser} />} />
      </Routes>
    </BrowserRouter>


  )
}
export default App;
