import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import foodList from '../foods/foodsComponentList';

const FC_try = ({ match }) => {

    useEffect(() => {
        console.log(match.params.name);
        console.log(foodArray);
    }, [])

    const fcMap = (x) => {
        return x.map((item, index) => {
            return <Link to={`/details/${item.fdcid}`} key={index}><div className="grid-item">{item.name}</div></Link>
        })
    }
    var foodArray;
    switch (match.params.name) {
        case "Breads":
            foodArray = foodList.Breads;
            break;
        case "Pastas":
            foodArray = foodList.Pastas;
            break;
        
        default:
            break;
    }



    return (
        <div className="grid-container">
            {fcMap(foodArray)}
        </div>

    )
}

export default FC_try;
