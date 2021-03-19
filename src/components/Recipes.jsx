import React from 'react'

export default function Recipes({title, calories, image, ingredients}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{Math.round(calories)}</p>
        </div>
    )
}
