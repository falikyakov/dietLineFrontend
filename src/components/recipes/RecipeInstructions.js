import React, { useState, useEffect } from 'react'

const RecipeInstructions = ({ match }) => {

    const [bakingSteps, setBakingSteps] = useState();
    useEffect(() => {
        console.log(match);
        fetch(
            `https://api.spoonacular.com/recipes/${match.params.id}/analyzedInstructions?&apiKey=${process.env.REACT_APP_SPOONACULAR_APP}`
        )
            .then((response) => response.json())
            .then((data) => {
                setBakingSteps(data);
                console.log(data);
            })
            .catch(() => console.log("error"));
    }, [match.params.id]);

    return (
        <div style={{ minHeight: "1000px" }}>
            <center className="recipeInstructions">
                <center><h3>{ match.params.title}</h3></center>
                <ol>
                    {bakingSteps && 
                        bakingSteps.map((data, index) => {
                            return <ol key={index}>{data.steps.map((step) => {
                                return <li key={index}>{ step.step}</li>
                           })}</ol>
                            data.steps &&
                                data.steps.map((step, index) => {
                                    return <li key={index}>
                                        hello {step.step}
                                    </li>
                                })
                        })}
                </ol>
            </center>
        </div>
    )
}

export default RecipeInstructions;
