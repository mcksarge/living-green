import {useContext, useState} from 'react';
import { UserContext } from './Contexts/UserContext';

function EditAccount(){
    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState(user.username)
    const [password, setPassword] = useState(user.password)
    const [name, setName] = useState(user.name)

    //Changes User account
    function handleSubmit(){
        let updatedUser

        if(username !== "" || name !== ""){
            updatedUser = {username, name, password}
        } else {
            updatedUser = {username: user.username, name: user.name, password}
        }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => setUser(data))
    }
    /********************** */

    return(
        <>
            <h3>Edit Account</h3>
            <div id="edit-account-cont">
                <div>
                    <label>Username: </label>
                    <br></br>
                    <input name="username" onChange={(e) => setUsername(e.target.value)} placeholder={username}></input>
                </div>
                <div>
                    <label>Name: </label>
                    <br></br>
                    <input name="name" onChange={(e) => setName(e.target.value)} placeholder={name}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <br></br>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password}></input>
                </div>
                <button id="update-user-btn" onClick={handleSubmit}>Submit Changes</button>
            </div>
        </>
    )
}

export default EditAccount;