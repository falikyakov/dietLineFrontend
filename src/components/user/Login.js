import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const info = {
        email: email,
        password: password
    }

    const loginUser = async (e) => {

        e.preventDefault();

        document.getElementById('pleaseWait').setAttribute("id", "pleaseWaitVisible");

        const user = await axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/dbfind/login", info);
        const userData = user.data;
        console.log(userData);
        const userString = JSON.stringify(userData);
        console.log("userString: " + userString);

        localStorage.setItem("user", userString);

        const localUser = localStorage.getItem("user");
        const localJson = JSON.parse(userString);
        const userId = localJson._id;

        const userPlan = await axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/dbfind/login2", { userId: userId });
        if (userPlan.status >= 200 && userPlan.status < 300) {
            const userPlanData = userPlan.data;
            console.log("userPlanData: " + userPlanData);
            const userPlanString = JSON.stringify(userPlanData);
            console.log("userPlanString: " + userPlanString);

            localStorage.setItem("userPlan", userPlanString);


            history.push('/checkLogin');
        }
        if (!userPlan.status ) {
            alert("error");
            history.push('/articles');
        }
    }


    return (
        <div style={{minHeight:"1000px"}}>
            <div className="login-form">
                <form>
                    <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
                    <h4 className="modal-title">Login to Your Account</h4>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required" onChange={changeEmail} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" onChange={changePassword} />
                    </div>

                    <input type="submit" className="loginButton btn btn-primary btn-block btn-lg" value="Login" onClick={loginUser} />
                    <div id="pleaseWait">Please wait...</div>
                </form>
                <div className="text-center small">Don't have an account? <Link to="/signup" style={{ color: "black" }}><u>Sign up</u></Link></div>
            </div>
            <br />
            <br />
            <br />
        
        </div>
    )
}

export default Login;
