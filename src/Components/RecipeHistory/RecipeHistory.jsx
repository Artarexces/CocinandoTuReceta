import React from 'react'
import RecipeCard from './RecipeCard'
import './RecipeHistory.css'

const RecipeHistory = ({ recipes, deleteRecipe, goBack }) => {

  //Manejo del historial de recetas


  //En esta parte tuve varios incovenientes por lo que tuve que optar por un modelo mas simple, ademas de implementar operadores ternarios, que me sirvieron bastante en anteriores componentes. 

  return (
    <div className='recipe-history'>
      <button onClick={goBack} className='goBack-btn'>Volver</button>
      <h3>Historial de recetas</h3>
      {recipes.length === 0 ? (
        <p>No hay recetas guardadas</p>
      ) : (
        <div className='recipe-list'>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              receta={recipe}
              onDelete={deleteRecipe}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default RecipeHistory
