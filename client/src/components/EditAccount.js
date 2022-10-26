import {useContext, useState} from 'react';
import { UserContext } from './Contexts/UserContext';

function EditAccount(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const {user, setUser} = useContext(UserContext)

    return(
        <>
            <div>
                <h3>Edit Account</h3>
                <div>
                    <label>Username: </label>
                    <input onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label>Name: </label>
                    <input onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
        </>
    )
}

export default EditAccount;