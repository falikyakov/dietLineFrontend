import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

const CheckUser = ({ match }) => {
    const [user, setUser] = useState();
    const [nonUser, setNonUser] = useState(false);

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        if (!user) {
            setNonUser(true);
        }

        console.log(match)
    }, [])

    return (
        <div>
            {
                user &&
                < Redirect to={`/${match.params.page}`}></Redirect>
            }
            {
                nonUser &&
                < Redirect to="/login"></Redirect>
            }
        </div>
    )
}

export default CheckUser;
