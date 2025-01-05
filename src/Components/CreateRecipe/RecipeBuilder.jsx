import React from 'react'
import './RecipeBuilder.css'

const RecipeBuilder = ({ elegirIngredientes = [], setElegirIngredientes }) => {
  const handleOnChange = (ingredient, nuevaCantidad) => {
    if (nuevaCantidad < 0) return;

    setElegirIngredientes((prevIngredients) =>
      prevIngredients.map((item) =>
        item.name === ingredient.name
          ? { ...item, cantidad: nuevaCantidad } : item
      )
    )
  }

  //  Aprendi a utilizar operadores ternarios para simplificar el codigo y tambien por que tuve problemas con la renderizacion de este componente


  return (
    <div className='recipe-builder'>
      <h3>Ingredientes</h3>
      {elegirIngredientes.length === 0 ? (
        <p>No hay ingredientes seleccionados</p>
      ) : (  // Lo mismo con este operador ternario 
        <ul>
          {elegirIngredientes.map((ingrediente) => (
            <li key={ingrediente.name}>
              {ingrediente.name}
              <input
                type="number"
                min="0"
                value={ingrediente.cantidad || 0}
                onChange={(e) =>
                  handleOnChange(ingrediente, parseInt(e.target.value) || 0)
                }
              />
            </li>
          ))}
        </ul>

      )}


    </div>
  )
}

export default RecipeBuilder
