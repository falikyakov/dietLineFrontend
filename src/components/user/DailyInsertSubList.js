import React from 'react';
import FoodList from '../foods/FoodList';


const DailyInsertSubList = (props) => {

    const fMap = (x) => {
        return x.map((food, index) => {
            return <li key={index} onClick={props.func} value={food.calories}>{food.name}</li>
        })
    }

    var foodCategory;
    switch (props.category) {
        case "Cereals":
            foodCategory = FoodList.Cereals;
            break;
        case "Breads":
            foodCategory = FoodList.Breads;
            break;
        case "Mains":
            foodCategory = FoodList.Mains;
            break;
        case "Dairy":
            foodCategory = FoodList.Dairy;
            break;
        case "Meats":
            foodCategory = FoodList.Meats;
            break;
        case "Side Dishes":
            foodCategory = FoodList.SideDishes;
            break;
        case "Fruits":
            foodCategory = FoodList.Fruits;
            break;
        case "Snacks":
            foodCategory = FoodList.Snacks;
            break;
        case "Grains":
            foodCategory = FoodList.Grains;
            break;
        case "Healthy":
            foodCategory = FoodList.Healthy;
            break;
        case "Drinks":
            foodCategory = FoodList.Drinks;
            break;
        case "Additions":
            foodCategory = FoodList.Additions;
            break;

        default:
            break;
    }



    return (
        <div className="subFoodsDropdown">
            <ul>
                {fMap(foodCategory)}
            </ul>
        </div>
    )
}

export default DailyInsertSubList
