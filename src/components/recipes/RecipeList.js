import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

const RecipeList = ({ recipeData }) => {

    const [recipeId, setRecipeId] = useState();
    const changeRecipeId = (e) => {
        setRecipeId(e.target.value);
    }
    
    const [bakingSteps, setBakingSteps] = useState();

    const getBakingInstructions = () => {
      
          fetch(
              `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
          )
              .then((response) => response.json())
              .then((data) => {
                  setBakingSteps(data);
                  console.log(data);
              })
            .catch(() => console.log("error"));
        
  }
  

    return (
        <Container className="recipeCard">
            <Row>
                {recipeData.map((recipe, index) => {
                    return <div><ul className="ingredients" key={index}>
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt="recipe" />
                        <h3>Ingredients</h3>
                        {recipe.usedIngredients.map((ing, index) => {
                            return <li className="recipeLi" key={index}>
                                {ing.original}
                            </li>
                        })}
                        {recipe.missedIngredients.map((ing, index) => {
                            return <li key={index}>
                                {ing.original}
                            </li>
                        })}
                        <br/>
                        <button onMouseEnter={changeRecipeId} onClick={getBakingInstructions} value={recipe.id} className="mt-auto ingButton btn">Baking Instructions</button>
                    </ul></div>
                })}
            </Row>
        </Container>
    )
}

export default RecipeList
