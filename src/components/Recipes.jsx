import React, { useState } from "react";

export default function Recipes({title, calories, image, ingredients}) {
    
    const [btn, setBtn] = useState(false)

    const handleClick = () => {
        setBtn(!btn);
    }
 


    return (
        <div className="recipes">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{Math.round(calories)}</p>
            <button onClick={handleClick}>View Ingredients</button>
            {btn && ingredients.map(ingredient => {
                return (
                    <p>{ingredient.text}</p>
                )
            })}
        </div>
    )
}
