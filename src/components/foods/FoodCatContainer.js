import React,{useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import foodInfo from './foodInfo';
import FoodCategoryCard from './foodCategoryCard';

const FoodCatContainer = () => {

    useEffect(() => {
        console.log(foodInfo);
    }, [])

    return (
        <Container> 
            <Row>
                {foodInfo.map((food, index) => {
                    return <Col xs={3} className="mb-5" key={index}>
                        <FoodCategoryCard name={food.name} foods={food.foods} image={food.image} />
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default FoodCatContainer;
