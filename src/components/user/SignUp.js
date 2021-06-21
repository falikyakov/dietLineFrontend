import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, Redirect, useHistory } from 'react-router-dom';

const SignUp = () => {

    let history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState();
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [loseKgGoal, setLoseKgGoal] = useState();
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailReset, setEmailReset] = useState();


    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeDob = (e) => {
        setDob(e.target.value);
    }
    const changeHeight = (e) => {
        setHeight(e.target.value);
    }
    const changeWeight = (e) => {
        setWeight(e.target.value);
    }
    const changeAge = (e) => {
        setAge(e.target.value);
    }
    const changeGender = (e) => {
        setGender(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const changeLoseKgGoal = (e) => {
        setLoseKgGoal(e.target.value);
    }



    const user = {
        "firstName": firstName,
        "lastName": lastName,
        "dob": dob,
        "height": height,
        "weight": weight,
        "loseKgGoal": loseKgGoal,
        "gender": gender,
        "email": email,
        "password": password
    };

    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


    const submitUser = async (event) => {
        event.preventDefault();


        const check = await axios.get("https://blooming-harbor-45317.herokuapp.com/router/db/find");
        const data = check.data;
        console.log(data);
        data &&
            data.map((user) => {
                if (user.Email == email && user.Password == password) {
                    setEmailReset(true);
                    return;
                }
            }
            )

        if (emailReset == true) {
            setEmailReset(false);
            alert("Email is already in use!");
            return;
        }

        if (!firstName || !lastName || !dob || !height || !weight || !loseKgGoal || !gender || !email || !password) {
            alert("Please fill out all the fields");
            return;
        }
        if (password != confirmPassword) {
            document.getElementById("confirmPasswordError").innerHTML = "Confirm password does not match password!";
            setTimeout(() => {
                document.getElementById("confirmPasswordError").innerHTML = "";
            }, 3000);
            return;
        }

        const confirm = window.confirm("Confirm");
        if (confirm == false) {
            return;
        }

        axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/DBinsert/insertUser", user)
            .then(
                (response) => {
                    console.log(response);
                }).
            catch((error) => {
                console.log("error: " + error);
                document.getElementById("error").innerHTML = "Server Error <br/>Please try again";
                setTimeout(() => {
                    document.getElementById("error").innerHTML = "";
                }, 3000);
            }
            );
        history.push('/login');

    };


    return (
        <div>
            <Container id="subg" style={{ width: "800px", border: "solid lightGreen", borderRadius: "5%", backgroundColor: "lightpink", marginTop: "98px" }} >
                <br /><h2 style={{ color: "red" }}><u>Sign Up</u></h2><br />
                <center>
                    <form className="form-horizontal" style={{ margin: "20px 20px" }} >
                        <strong>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="firstName" style={{ color: "red" }} >First Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" onChange={changeFirstName} aria-required="true" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" onChange={changeLastName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3" htmlFor="dob">Date of Birth:</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="dob" name="dob" placeholder="Date of Birth" onChange={changeDob} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="height">Height (cm):</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="height" name="height" placeholder="Enter Height in centimeters" onChange={changeHeight} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="weight">Weight (Kg):</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="weight" name="weight" placeholder="Enter Weight in Kg" onChange={changeWeight} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="weight"><strong>Weight Loss Goal(Kg):</strong></label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="weightLossGoal" name="weightLossGoal" placeholder="Enter Your Ideal Weight (in Kg)" onChange={changeLoseKgGoal} />
                                </div>
                            </div>
                            <center style={{ marginTop: "40", fontSize: "1.5em" }} onChange={changeGender}>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male">&nbsp; Male</label> &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female">&nbsp; Female</label><br />
                            </center><br />
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={changeEmail} />
                                    {email}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" onChange={changePassword} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-3" htmlFor="confirmPassword">Confirm Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" onChange={changeConfirmPassword} />
                                </div>
                                <strong><div id="confirmPasswordError" style={{ color: "blue" }}></div></strong>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-success" onClick={submitUser} ><span style={{ color: "white" }} >Submit</span></button>
                                </div>
                            </div>
                            {emailReset}
                            <h3 id="error" style={{ color: "black" }}></h3>
                            <br />
                        </strong>
                    </form>
                </center>
            </Container>
            <br /><br />
        </div>
    )
}

export default SignUp
