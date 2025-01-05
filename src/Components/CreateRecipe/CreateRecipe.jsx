import React, { useState } from 'react'
import IngredientsList from './IngredientsList'
import RecipeBuilder from './RecipeBuilder'
import RecipeSummary from './RecipeSummary'
import './CreateRecipe.css'

// Esta es la interfaz donde se eligen los ingredientes para la receta y donde declaro el estado el cual me deje navegar entre componentes  
const CreateRecipe = ({ goBack, saveRecipe }) => {

  const [elegirIngredientes, setElegirIngredientes] = useState([])



  return (
    <>
      <div className="create-recipe-container">
        <h2 className="create-title">Crea tu receta!</h2>

        <IngredientsList
          elegirIngredientes={elegirIngredientes}
          setElegirIngredientes={setElegirIngredientes}
        />

        <RecipeBuilder
          elegirIngredientes={elegirIngredientes}
          setElegirIngredientes={setElegirIngredientes}
        />

        <RecipeSummary
          elegirIngredientes={elegirIngredientes}
          saveRecipe={saveRecipe}
        />


        <button className='goBack-btn' onClick={goBack}> Volver</button>

      </div>
    </>
  )
}

export default CreateRecipe
