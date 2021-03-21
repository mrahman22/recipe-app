import React, { useState } from "react";

export default function Recipes({title, calories, image, ingredients}) {
    
    const [btn, setBtn] = useState(false)

    const handleClick = () => {
        setBtn(!btn);
    }
 


    return (
        <div className="recipes">
            <img src={image} alt={title}/>
            <h5 className="recipe-title">{title.toUpperCase()}</h5>
            <p>Calories: {Math.round(calories)}</p>
            <button onClick={handleClick}>{btn ? "Hide Ingredients" : "View Ingredients"}</button>
            {btn && ingredients.map(ingredient => {
                return (
                    <p>{ingredient.text}</p>
                )
            })}
        </div>
    )
}
