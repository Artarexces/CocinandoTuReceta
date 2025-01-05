import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ receta, onDelete }) => {

  if (!receta || !receta.name || !receta.ingredientes) {
    console.warn('datos de receta invalidos:', receta);
    return null;
  }

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
