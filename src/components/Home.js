import React, { useEffect, useState } from 'react'
import ReactSlider from './ReactSlider'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';
import WelcomeCard from './user/welcomeCard'
import WelcomeUser from './user/welcomeUser';



const Home = (props) => {

    const [user, setUser] = useState({});

    useEffect(async () => {

        const userString = localStorage.getItem("user");
        if (userString) {
            const user = JSON.parse(userString);
            setUser(user);

            const info = {
                email: user.email,
                password: user.password
            }

            const getUser = await axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/dbfind/login", info);
            const userData = getUser.data;
            console.log(userData);
            const getUserString = JSON.stringify(userData);
            console.log("userString: " + getUserString);

            localStorage.setItem("user", userString);

            const localUser = localStorage.getItem("user");
            const localJson = JSON.parse(userString);
            const userId = localJson._id;

            const userPlan = await axios.post("https://blooming-harbor-45317.herokuapp.com/router/db/dbfind/login2", { userId: userId });
            const userPlanData = userPlan.data;
            console.log(userPlanData);
            const userPlanString = JSON.stringify(userPlanData);
            console.log("userPlanString: " + userPlanString);

            localStorage.setItem("userPlan", userPlanString);


            const resetUserString = localStorage.getItem("user");
            const resetUser = JSON.parse(resetUserString);
            setUser(resetUser);
        }
    }, [])

    return (
        <div>
            <center>
                <ReactSlider />
            </center>
           <WelcomeUser />
            <br />
            <center>
                <Container>
                    <Row>
                        <Card className="h-100 shadow-sm bg-white rounded" style={{ margin: "15px", border: "purple solid 1px" }}>
                            <Card.Img variant="top" src="images/meal1.jpg" style={{ height: "240px", maxWidth: "330px" }} />
                            <Card.Body className="d-flex flex-column" style={{ height: "200px", maxWidth: "330px" }} >
                                <div className="d-flex mb-2 justify-content-between">
                                    <Card.Title className="mb-0 font-weight-bold">Headlines</Card.Title>
                                </div>
                                <Card.Text className="text-secondary">Browse through current health news headlines</Card.Text>
                                <Button
                                    className="mt-auto font-weight-bold"
                                    variant="info"
                                    block
                                >
                                    <Link to="/articles" style={{ color: "white" }}>more</Link>
                                </Button>
                            </Card.Body>
                        </Card>

                        <Card className="h-100 shadow-sm bg-white rounded" style={{ margin: "15px", border: "purple solid 1px" }}>
                            <Card.Body className="d-flex flex-column" style={{ height: "200px", maxWidth: "330px" }}>
                                <div className="d-flex mb-2 justify-content-between">
                                    <Card.Title className="mb-0 font-weight-bold">Health Tips</Card.Title>
                                </div>
                                <Card.Text className="text-secondary">Give yourself a better chance at success with these proven health tips!</Card.Text>
                                <Button
                                    className="mt-auto font-weight-bold"
                                    variant="info"
                                    block
                                >
                                    <Link to={`/foods/${props.name}`} style={{ color: "white" }}>more</Link>
                                </Button>
                            </Card.Body>
                            <Card.Img variant="top" src="images/meal6.jpg" style={{ height: "240px", maxWidth: "330px" }} />
                        </Card>

                        <Card className="h-100 shadow-sm bg-white rounded" style={{ margin: "15px", border: "purple solid 1px" }}>
                            <Card.Img variant="top" src="images/meal7.jpg" style={{ height: "240px", maxWidth: "330px" }} />
                            <Card.Body className="d-flex flex-column" style={{ height: "200px", maxWidth: "330px" }}>
                                <div className="d-flex mb-2 justify-content-between">
                                    <Card.Title className="mb-0 font-weight-bold">Recipes</Card.Title>
                                </div>
                                <Card.Text className="text-secondary">Enhance your dieting experience with these delicious, low-fat recipes</Card.Text>
                                <Button
                                    className="mt-auto font-weight-bold"
                                    variant="info"
                                    block
                                >
                                    <Link to={`/foods/${props.name}`} style={{ color: "white" }}>more</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </center>
        </div>
    )
}

export default Home
