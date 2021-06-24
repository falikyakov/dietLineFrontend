import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

const RecipePage = () => {

    const [recipeData, setRecipeData] = useState(null);

    const [food, setFood] = useState(700);
    const changeFood = (e) => {
        setFood(e.target.value);
    }


    const getRecipes = () => {
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${food}&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
        )
            .then((response) => response.json())
            .then((data) => {
                setRecipeData(data);
                console.log(data);
            })
            .catch(() => console.log("error"));
    }



    return (
        <div>
            <section className="controls">
                <center>
                        <input type="text" placeholder="Enter food name" onChange={changeFood} />
                        <button onClick={getRecipes}>Browse Recipes</button>
                </center>
                {recipeData && <RecipeList recipeData={recipeData} />}
            </section>
        </div>
    )
}

export default RecipePage;
