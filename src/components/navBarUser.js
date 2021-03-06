import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBarUser = () => {

    const [user, setUser] = useState({});
    useEffect(() => {
        { /*
            setInterval was used in order to refresh the page constantly
        in order to have the "logout" button show immediately in place of
        "login", as soon as user logs out.
        */}
        setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
        }, [])
    }, []);


    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userPlan");
    }

    if (!user) {
        return (
            <div className="navbar-nav ml-auto">
                <Link to="/login" className="nav-item nav-link">Login</Link> <span className="nav-item nav-link">|</span> <Link to="/SignUp" className="nav-item nav-link">Sign Up</Link>
            </div>
        )
    }
    if (user) {
        return (
            <div className="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link" onClick={logout}>Logout</Link>
                <Avatar img="/images/Eat-healthy.jpg" />
            </div>
        )
    }


}


export default NavBarUser;




{/*
    const [anon, setAnon] = useState("");
    const changeAnon = (e) => {
        setAnon(e.target.value);
        console.log(anon);
    }
*/}

{/*onClick={changeAnon} */ }