import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import newFoodInfo from './NewFoodInfo';
import NewFoodCategoryCard from './NewFoodCategoryCard';

const NewFoodCatContainer = () => {

    return (
        <Container>
            <Row>
                {newFoodInfo.map((category, index) => {
                    return <Col xs={3} className="mb-5" key={index}>
                        <NewFoodCategoryCard name={category.name} foods={category.foods}
                            image={category.image} />
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default NewFoodCatContainer;
