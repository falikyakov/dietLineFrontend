import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipeData }) => {

    const [recipeId, setRecipeId] = useState();
    const changeRecipeId = (e) => {
        setRecipeId(e.target.value);
    }
    
    const [bakingSteps, setBakingSteps] = useState();

//     const getBakingInstructions = () => {
      
//           fetch(
//               `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
//           )
//               .then((response) => response.json())
//               .then((data) => {
//                   setBakingSteps(data);
//                   console.log(data);
//               })
//             .catch(() => console.log("error"));
        
//   }
  

    return (
        <Container className="recipeCard">
            <Row>
                {recipeData.map((recipe, index) => {
                    return <div key={index}><ul className="ingredients">
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
                        <Link to={`/recipeInstructions/${recipe.id}/${recipe.title}`}><button onMouseEnter={changeRecipeId} value={recipe.id} className="mt-auto ingButton btn">Baking Instructions</button></Link>
                    </ul></div>
                })}
            </Row>
        </Container>
    )
}

export default RecipeList
