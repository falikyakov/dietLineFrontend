import React from 'react';
import foodList from './FoodList';

const CategoryDetails = ({match}) => {

    const fcMap = (x) => {
        return x.map((food, index) => {
            return < tr key={index} >
                <td>{food.name}</td>
                <td><center>{food.calories}</center></td>
            </tr >
        })
    }
    var foodArray;
    switch (match.params.categoryName) {
        case "Cereals":
            foodArray = foodList.Cereals;
            break;
        case "Breads":
            foodArray = foodList.Breads;
            break;
        case "Mains":
            foodArray = foodList.Mains;
            break;
        case "Dairy":
            foodArray = foodList.Dairy;
            break;
        case "Meats":
            foodArray = foodList.Meats;
            break;
        case "Side Dishes":
            foodArray = foodList.SideDishes;
            break;
        case "Fruits":
            foodArray = foodList.Fruits;
            break;
        case "Snacks":
            foodArray = foodList.Snacks;
            break;
        case "Grains":
            foodArray = foodList.Grains;
            break;
        case "Healthy":
            foodArray = foodList.Healthy;
            break;
        case "Drinks":
            foodArray = foodList.Drinks;
            break;
        case "Additions":
            foodArray = foodList.Additions;
            break;


        default:
            break;
    }


    return (
        <div style={{minHeight:"900px"}}>
            <center>
                <table className="details-table" id="dbg">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Calories per 100gr.</th>
                        </tr>
                    </thead>
                    <tbody>
                       {fcMap(foodArray)}
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default CategoryDetails
