import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

function NewAccount() {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    
    


    // Handles Login
    function onSubmit(e) {
        e.preventDefault()

        const user={username, name, password}
        console.log(user)

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
            <h1>New Account</h1>
            <form id="new-account-input-cont" onSubmit={onSubmit}>
                <input onChange={(e) => setUsername(e.target.value)} className="new-account-input" placeholder="Username"></input>
                <input onChange={(e) => setName(e.target.value)} className="new-account-input" placeholder="Your Name"></input>
                <input onChange={(e) => setPassword(e.target.value)} className="new-account-input" placeholder="Password" type="password"></input>
                <input type="submit" id="login-submit-btn" />
            </form>
            <br></br>
            <br></br>
            <label><strong>Already have an account?</strong></label>
            <br></br>
            <br></br>
            <NavLink to={'/login'} id="create-account-btn">Login Page</NavLink>
        </div>
    )
}

export default NewAccount;