
import LoginForm from "../components/LoginForm";
import User from "../components/User"


const UserContainer = ({ loggedInUser, onlineUser, users, postUser, userPins }) => {

    return (
        <>
            {onlineUser === undefined ?
                <LoginForm loggedInUser={loggedInUser} users={users} postUser={postUser} /> :
                <User user={onlineUser} loggedInUser={loggedInUser} userPins={userPins}/>
            }
        </>
    )
}

export default UserContainer;