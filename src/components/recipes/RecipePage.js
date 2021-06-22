import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';

const RecipePage = () => {

    const [recipeData, setRecipeData] = useState(null);

    const [calories, setCalories] = useState(700);
    const changeCalories = (e) => {
        setCalories(e.target.value);
    }
    

    const getRecipes = () => {
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
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
                <input type="number" placeholder="Calories (i.e. 700)" onChange={changeCalories} />
                <button onClick={getRecipes}>Browse Recipes</button>
                {recipeData && <RecipeList recipeData={recipeData} />}
            </section>
        </div>
    )
}

export default RecipePage;
