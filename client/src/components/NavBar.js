import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { UserContext } from './Contexts/UserContext';



function NavBar({onLogout}) {

    const {user, setUser} = useContext(UserContext)

    // Logs out user
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => onLogout())
    }
    /************* */

    return (
        <>
            <div id="navbar-container">
                <h1 id="navbar-title">Living Greenery</h1>
                <div id="account-display">
                    <h4 id="logged-in-user">Logged in as: {user.name}</h4>
                    <NavLink to="/account" id="navlink-account-edit">Edit Account</NavLink>
                </div>
                <div id="navbar-links">
                    <NavLink to="/home" exact className="navlink">Home</NavLink>
                    <NavLink to="/plants" className="navlink">Plants</NavLink>
                    <NavLink to="/articles" className="navlink">Articles</NavLink>
                    <NavLink to ="/" className="navlink" onClick={handleLogout}>Logout</NavLink>
                </div>
            </div>
        </>
    )
};

export default NavBar;