import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'


function LoginPage() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    // Handles Login
    function onLogin(e) {
        e.preventDefault()

        const user={username, name, password}

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
                .then((user) => console.log(user))
            } else {
                res.json()
                .then((err) => setErrors(err.errors))
            };
        })
        .then((res) => {
            if(res.ok){
                res.json()
                .then((user) => console.log(user))
            } else {
                res.json()
                .then((err) => setErrors(err.errors))
            }
        })
    }

    const errorMessage = errors.map((error) => {
        <p key={error.login}>{error.login}</p>
    })
    
    return (
        <div id="new-account-cont">
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                    <li key={error}>{error.login}</li>
                ))}
                </ul>
            )}
            <h1>Login</h1>
            <form id="new-account-input-cont">
                <input onChange={(e) => setUsername(e.target.value)} className="new-account-input" placeholder="Username"></input>
                <input onChange={(e) => setName(e.target.value)} className="new-account-input" placeholder="Full Name"></input>
                <input onChange={(e) => setPassword(e.target.value)} className="new-account-input" placeholder="Password" type="password"></input>
            </form>
            <button>Login</button>
            <br></br>
            <br></br>
            <label><strong>Don't have an account?</strong></label>
            <br></br>
            <br></br>
            <NavLink to={'/create-account'} id="create-account-btn">Create Account</NavLink>
        </div>
    )
}

export default LoginPage;