import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import foodInfo from '../foods/foodInfo';
import CARD_try from './CARD_try';
const CON_try = () => {

    useEffect(() => {
        console.log(foodInfo);
    }, [])

    return (
        <Container>
            <Row>
                {foodInfo.map((food, index) => {
                    return <Col xs={3} className="mb-5" key={index}>
                        <CARD_try name={food.name} foods={food.foods} image={food.image} />
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default CON_try;
