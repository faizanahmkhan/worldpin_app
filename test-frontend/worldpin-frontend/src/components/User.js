// import "./User.css"

const User = ({user, loggedInUser}) => {

    const logOut = () => {
        loggedInUser({
            name:"",
            pins: []
        })
        console.log(loggedInUser);
        window.location.reload()
    }
    
    return (
        <div className="user">
            <div className="user-name">
                <h2>{user ? user.name : ""}</h2>
            </div>
           
            <button onClick={logOut} id="log-out">Log Out</button>
        </div>
    )
}
export default User;

