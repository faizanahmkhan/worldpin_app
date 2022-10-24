import { useState } from 'react';
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Maps from './Maps';


function App() {

    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        setIsLogin((isLogin) => !isLogin) 
    }


  return (
<>
<NavBar handleLoginClick={handleLoginClick}/>
<LoginForm isLogin={isLogin} />
<Maps></Maps>
</>

)
}
export default App;
