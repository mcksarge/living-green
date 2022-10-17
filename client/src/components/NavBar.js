import {NavLink} from 'react-router-dom';

function NavBar({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => onLogout())
    }

    return (
        <>
            <div id="navbar-container">
                <h1 id="navbar-title">Living Greenery</h1>
                <div id="navbar-links">
                    <NavLink to="/home" exact className="navlink">Home</NavLink>
                    <NavLink to="/plants" className="navlink">Plants</NavLink>
                    <NavLink to="/articles" className="navlink">Articles</NavLink>
                    <button className="navlink" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
};

export default NavBar;