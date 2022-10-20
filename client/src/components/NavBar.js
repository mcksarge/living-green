import {NavLink} from 'react-router-dom';
import UserPlantCard from './UserPlantCard';

function NavBar({user, onLogout}) {

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
                <h4 id="logged-in-user">Logged in as: {user.name}</h4>
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