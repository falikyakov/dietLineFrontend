import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CARD_try = (props) => {
    return (

        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={props.image} style={{ height: "150px" }} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{props.name}</Card.Title>
                </div>
                <Card.Text className="text-secondary">{props.foods}</Card.Text>
                <Button
                    className="mt-auto font-weight-bold"
                    variant="success"
                    block
                >
                    <Link to={`/x/${props.name}`} style={{ color: "white" }}> Browse Foods</Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CARD_try;
