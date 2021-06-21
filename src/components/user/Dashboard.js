import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import InfoCards from './infoCard'
import LineChart from './LineChart';
import UserGraph from './userGraph';

const Dashboard = () => {

    const [user, setUser] = useState({});
    const [userPlan, setUserPlan] = useState({});

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
    }, [])

    const fixedBmi = user && user.BMI && user.BMI.toFixed(2);

    const avgCals = () => {
        var i = userPlan.dailyActualInput && userPlan.dailyActualInput.length;
        var j = i - 8;
        var cals = 0;
        userPlan.dailyActualInput &&
            userPlan.dailyActualInput.map((item, index) => {
                if (index > j) {
                    return cals = cals + item.totalCal;
                }
            })
        return parseInt(cals / 7);
    }


    const avgExcersize = () => {
        var i = userPlan.dailyActualInput && userPlan.dailyActualInput.length;
        var j = i - 8;
        var excMin = 0;
        userPlan.dailyActualInput &&
            userPlan.dailyActualInput.map((item, index) => {
                if (index > j) {
                    if (item.excersizeMinutesDaily) {
                        return excMin = excMin + item.excersizeMinutesDaily;
                    }
                }
            })
        return parseInt(excMin / 7);
    }

    var dt = new Date('06-06-2021');


    return (
        <div>
            <Container style={{ backgroundColor: "honeydew" }}>
                <h1 className="display-6">Your Profile:</h1>
                <Row>
                    <table className="profile-table" style={{ marginLeft: "20px" }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Height </th>
                                <th>Start Weight </th>
                                <th>BMI</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{user.FirstName}</th>
                                <th>{user.LastName}</th>
                                <th>age</th>
                                <th>{user.HeightCM}</th>
                                <th>{user.StartWeightKG}</th>
                                <th>{fixedBmi}</th>
                                <th>{user.Email}</th>
                            </tr>
                        </tbody>
                    </table>
                </Row>
                <br />
                <Row className="d-flex">
                    <InfoCards title="Average Calorie Intake" secondary="of the last 7 days" style={{ backgroundColor: "aqua" }} badge={avgCals()} />
                    <InfoCards title="Average Excersize" secondary="of the last 7 days" style={{ backgroundColor: "aqua" }} badge={avgExcersize()} />
                    <InfoCards title="Total Weight Loss" secondary="since beginning of program" style={{ backgroundColor: "aqua" }} badge="3.5 kg" />
                    <InfoCards title="Amount Remaining" secondary="to your goal" style={{ backgroundColor: "aqua" }} badge="or something" />
                </Row>

                <Row>

                    <UserGraph />
                    <LineChart />
                </Row>
                <br />
                <br />
            </Container>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Dashboard;
