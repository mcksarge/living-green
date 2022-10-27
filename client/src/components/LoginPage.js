import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function LoginPage({onLogin}) {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [createAccount, setCreateAccount] = useState(false)
    const dispatch = useDispatch();
    
    
    // Handles Login
    function onSubmit(e) {
        e.preventDefault();

        if(!createAccount) {
            const user={username, password}
            fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.ok){
                    res.json()
                    .then((user) => onLogin(user))
                } else {
                    res.json()
                    .then((err) => setErrors(err.errors))
                };
            })
        } else {
            const user={username, name, password}
            fetch('http://localhost:3000/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.ok){
                    res.json()
                    .then((user) => onLogin(user))
                } else {
                    res.json()
                    .then((err) => setErrors(err.errors))
                };
            })
        }
       
    }
    /************************************** */


    function handleShowLogin(){
        if(!createAccount){
            setCreateAccount(true)
        } else {
            setCreateAccount(false)
        }
    }

    // const errorMessage = errors.map((error) => {
    //     <p key={error.login}>{error.login}</p>
    // })
    
    if(!createAccount){
        return (
            <div className="new-account-cont">
                {errors.length > 0 && (
                    <ul className="errors" style={{ color: "red" }}>
                    {errors.map((error) => (
                        <li key={error}>{error.login}</li>
                    ))}
                    </ul>
                )}
                <h2>Login</h2>
                <form id="new-account-input-cont" onSubmit={onSubmit}>
                    <input onChange={(e) => setUsername(e.target.value)} className="new-account-input" placeholder="Username"></input>
                    <input onChange={(e) => setPassword(e.target.value)} className="new-account-input" placeholder="Password" type="password"></input>
                    <input type="submit" id="login-submit-btn" />
                </form>
                <br></br>
                <br></br>
                <label><strong>Don't have an account?  Join the club!</strong></label>
                <br></br>
                <br></br>
                <button onClick={handleShowLogin}>Create Account</button>
            </div>
        )
    } else {
            return (
                <div className="new-account-cont">
                    {errors.length > 0 && (
                        <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error.login}</li>
                        ))}
                        </ul>
                    )}
                    <h2>New Account</h2>
                    <form id="new-account-input-cont" onSubmit={onSubmit}>
                        <input onChange={(e) => setUsername(e.target.value)} className="new-account-input" placeholder="Username"></input>
                        <input onChange={(e) => setName(e.target.value)} className="new-account-input" placeholder="Your Name"></input>
                        <input onChange={(e) => setPassword(e.target.value)} className="new-account-input" placeholder="Password" type="password"></input>
                        <input type="submit" id="login-submit-btn" />
                    </form>
                    <br></br>
                    <br></br>
                    <label><strong>Already have an account? Login here!</strong></label>
                    <br></br>
                    <br></br>
                    <button onClick={handleShowLogin}>Login</button>
                </div>
            )
                        }
}

export default LoginPage;