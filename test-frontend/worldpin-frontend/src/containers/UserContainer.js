
import LoginForm from "../components/LoginForm";
import User from "../components/User"


const UserContainer = ({loggedInUser, onlineUser, users, postUser}) => {

    return(
        <>
        { onlineUser === undefined ?
        <LoginForm loggedInUser={loggedInUser} users={users} postUser={postUser}/> :
        <User user={onlineUser} loggedInUser={loggedInUser}/>
        }
        </>
    )
}

export default UserContainer;