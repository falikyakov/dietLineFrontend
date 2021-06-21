import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const CheckLogin = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
        console.log(user);
    }, [])

    if (!user) {
        return (
            <div style={{ height:"1000px"}}>
                <h2>Login failed</h2>
                <h3>Back to <Link to="/login">Login</Link></h3>
            </div>
        )
    }
    if (user) {
        return (
            <Redirect to="/"></Redirect>
        )
    }
  
}

export default CheckLogin
