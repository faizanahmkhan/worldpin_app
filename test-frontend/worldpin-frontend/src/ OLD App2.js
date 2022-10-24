// import './App.css';
import React from 'react';
// import Popup from 'reactjs-popup';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import UserContainer from './containers/UserContainer'
// import { useEffect, useState } from 'react';

function App() {

  // const [users, setUsers] = useState([])
  // const [onlineUser, setOnlineUser] = useState()

  // const loggedInUser = chosenUser => {
  //   if (chosenUser.name === "") setOnlineUser()
  //   setOnlineUser(chosenUser)
  // }

  // const fetchUsers = async () => {
  //   const response = await fetch("http://localhost:8080/users");
  //   const userData = await response.json();
  //   setUsers(userData);
  // }

  // const postUser = async newUser => {
  //   const response = await fetch("http://localhost:8080/users", {
  //     method: "POST",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newUser)
  //   })
  //   const savedUser = await response.json()
  //   setUsers([...users, savedUser])
  // }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])


  // const addFaveRecipe = async (recipeId, userId) => {
  //   const originalUser = users.find(user => user.userId === userId)
  //   const savedRecipe = recipes.find(recipe => recipe.id === recipeId)
  //   originalUser.favRecipes.push(savedRecipe)

  //   await fetch("http://localhost:8080/users/fav?userId=" + userId + "&recipeId=" + recipeId, {
  //     method: "PUT", headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(originalUser)
  //   })

  //   const userList = users.map(user => {
  //     if (user.userId === userId) {
  //       return originalUser
  //     }
  //     else { return user }
  //   })

  //   setOnlineUser(originalUser)
  //   setUsers(userList)
  // }




  return (
    <>
      <h1>Hi</h1>
      {/* //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/account' element={<UserContainer onlineUser={onlineUser} loggedInUser={loggedInUser} users={users} postUser={postUser} />} />
    //     </Routes>
    //   </BrowserRouter> */}
      <Popup trigger={<button className="button"> Open Modal </button>} modal nested > {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div> <div className="content"> {' '} Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? </div> <div className="actions"> <Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut. </span> </Popup> <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> </div> )} </Popup>
    </>
  );
}

// export default () => ( <Popup trigger={<button className="button"> Open Modal </button>} modal nested > {close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> <div className="header"> Modal Title </div> <div className="content"> {' '} Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? </div> <div className="actions"> <Popup trigger={<button className="button"> Trigger </button>} position="top center" nested > <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut. </span> </Popup> <button className="button" onClick={() => { console.log('modal closed '); close(); }} > close modal </button> </div> </div> )} </Popup>); 
export default App;