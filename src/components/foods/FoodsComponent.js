import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import foodList from './foodsComponentList';

const FoodsComponent = ({match}) => {

    useEffect(() => {
        console.log(match)
        console.log(match.params.foodName);
        console.log(foodArray);
    }, [])

    const fcMap = (x) => {
        return x.map((item, index) => {
            return <Link to={`/details/${item.fdcid}`} key={index}><div className="grid-item">{item.name}</div></Link>
        })
    }
    var foodArray;
    switch (match.params.foodName) {
        case "Breads":
            foodArray = foodList.Breads;
            break;
        case "Pastas":
            foodArray = foodList.Pastas;
            break;
        case "Fruits":
            foodArray = foodList.Fruits;
            break;
        case "Drinks":
            foodArray = foodList.Drinks;
            break;
        case "Candy":
            foodArray = foodList.Candy;
            break;
        case "Greens":
            foodArray = foodList.Greens;
            break;
        case "Health Foods":
            foodArray = foodList.HealthFoods;
            break;
        case "Milk Products":
            foodArray = foodList.MilkProducts;
            break;
        case "Vegetables":
            foodArray = foodList.Vegetables;
            break;
        

        default:
            break;
    }



    return (
        <div className="grid-container">
            {foodArray && fcMap(foodArray)}
        </div>

    )
}


export default FoodsComponent;
