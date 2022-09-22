import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div id="navbar-container">
                <h1 id="navbar-title">Living Greenery</h1>
                <div id="navbar-links">
                    <NavLink to="/" exact className="navlink">Home</NavLink>
                    <NavLink to="/plants" className="navlink">Plants</NavLink>
                    <NavLink to="/articles" className="navlink">Articles</NavLink>
                    <NavLink to="/logout" className="navlink">Logout</NavLink>
                </div>
            </div>
        </>
    )
};

export default NavBar;