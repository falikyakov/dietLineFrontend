import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import InfoCard from './infoCard'
import WelcomeCard from './welcomeCard'

const WelcomeUser = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
        console.log(user);
    }, [])


 



    if (!user) {
        return <div></div>
    }
    if (user) {
        return (
            <div>
                <h1 className="display-2" style={{ color: "darkblue" }}>Welcome {user.FirstName} {user.LastName}</h1>
                <h2>Choose an option:</h2>
                <Row style={{ margin: "10px" }}>
                    <WelcomeCard title="Start a New Diet Plan" secondary="Design a plan that's personalized just for you!" button="Start now" link="/newPlan" />
                    <WelcomeCard title="See Your Current Menu Plan" secondary="View your daily menu plans that you have set up" button="Current Plan" link="/menuView" />
                    <WelcomeCard title="Create New Daily Menu" secondary="Help yourself reach your goal by setting a menu for a specific day. " button="Daily Menu" link="/dailyPlan" />
                    <WelcomeCard title="Personal Info" secondary="View Your Personal Information" button="Personal Information" link="/dash" />
                    {/*<WelcomeCard title="Informational Articles" secondary="View Articles Geared Specially for You" button="Articles" link="/articles" />*/}
                </Row>
            </div>
        )
    }
}

export default WelcomeUser;
