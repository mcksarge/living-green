

function LoginPage() {
    
    return (
        <div id="new-account-cont">
            <h1>Login</h1>
            <form id="new-account-input-cont">
                <input className="new-account-input" placeholder="Username"></input>
                <input className="new-account-input" placeholder="Full Name"></input>
                <input className="new-account-input" placeholder="Password" type="password"></input>
            </form>
            <button>Login</button>
            <br></br>
            <br></br>
            <label><strong>Don't have an account?</strong></label>
            <br></br>
            <button id="create-account-btn">Create Account</button>
        </div>
    )
}

export default LoginPage;