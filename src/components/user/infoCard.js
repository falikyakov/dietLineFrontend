import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';


const InfoCard = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6" style={{ marginBottom: "10px" }}>
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Body style={props.style} className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">{props.title}</Card.Title>
                    </div>
                    <Card.Text className="text-secondary">{props.secondary}</Card.Text>
                    <span className="badge badge-secondary"><h3>{ props.badge}</h3></span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InfoCard;
