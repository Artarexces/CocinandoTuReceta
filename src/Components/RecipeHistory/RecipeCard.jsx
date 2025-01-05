import React from 'react'
import './RecipeCard.css'

// Tarjeta que guarda la receta + su boton para eliminar recetas 
// Aca utilize props de otros componentes para almacenarla en receta 

const RecipeCard = ({ receta, onDelete }) => {
  const { name, ingredientes, nutritionalScore } = receta;

  return (
    <div className='recipe-card'>
      <h4 className='recipe-name'>{name}</h4>
      <p>Puntaje Nutricional:{nutritionalScore}</p>
      <h5>Ingredientes:</h5>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.name || 'Ingrediente desconocido'}: {ingrediente.cantidad || 0}
          </li>
        ))}
      </ul>
      <button className='delete-btn' onClick={() => onDelete(name)}>Eliminar</button>
    </div>
  )
}

export default RecipeCard
