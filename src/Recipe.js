import React from 'react'
import Style from './recipe.module.css'


const Recipe = ({title,calories,img,ingredient}) => {
    return(
        <div>
            <h1 className={Style.recipe}>{title}</h1>
            <div className='items'>
            <p>Calories: {calories}</p>
            <ul >
                {ingredient.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img src={img} alt=""/>
            </div>
        </div>
    )
}
export default Recipe;