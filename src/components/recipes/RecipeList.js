import React, { useState,useEffect } from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipeData }) => {

    const [recipeId, setRecipeId] = useState();
    const changeRecipeId = (e) => {
        setRecipeId(e.target.value);
    }
    
    const [bakingSteps, setBakingSteps] = useState();

    const getBakingInstructions = (id) => {
      
          fetch(
              `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
          )
              .then((response) => response.json())
              .then((data) => {
                  setBakingSteps(data);
                  console.log(data);
              })
            .catch(() => console.log("error"));
        
  }
  

    return (
        <main>
            <section className="ingredients">
                <h1>Macros - {recipeId}</h1>
                {recipeData.map((recipe, index) => {
                    return <ul key={index}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt="recipe" />
                        {recipe.id}
                        {recipe.usedIngredients.map((ing, index) => {
                            return <li key={index}>
                                {ing.original}
                            </li>
                        })}
                        {recipe.missedIngredients.map((ing, index) => {
                            return <li key={index}>
                                {ing.original}
                            </li>
                        })}
                        <button onMouseEnter={changeRecipeId} onClick={getBakingInstructions}>Baking Instructions</button>
                    </ul>
                })}
            </section>
        </main>
    )
}

export default RecipeList
