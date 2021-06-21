import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HomeCard = (props) => {
    return (
        <div className="card bg-default" style={{
            margin: "5px", backgroundImage: `url("/images/meal1.jpg")`}}>
            <div className="text-center" variant="top" style={{ height: "60px",border:"grey solid" }}>
                <div style={{ margin: "10px" }}>
                    <h3 style={{fontWeight:"bold"}}>{props.title}</h3>
                </div>
            </div>
            <div className="card-body text-center">
                <p className="card-text">{props.text}</p>
            </div>
            <Button
                className="mt-auto font-weight-bold"
                variant="default"
                block
            >
                <Link to={``}>{props.more} >>></Link>
            </Button>
        </div>
    )
}

export default HomeCard;
