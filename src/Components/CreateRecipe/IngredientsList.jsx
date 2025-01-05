import React from 'react'
import './IngredientsList.css'


const IngredientsList = ({ elegirIngredientes, setElegirIngredientes }) => {
  const ingredientes = {
    Proteinas: ['Carne', 'Pollo', 'Huevos', 'Tofu'],
    Carbohidratos: ['Papas', 'Arroz', 'Pastas', 'Pan'],
    Vegetales: ['Cebolla', 'Zanahoria', 'Lechuga', 'Tomate'],
    Otros: ['Sal', 'Aceite', 'Especias'],
  }

  const handleIngredientClick = (ingrediente) => {
    if (!elegirIngredientes.some((item) => item.name === ingrediente)) {
      setElegirIngredientes([
        ...elegirIngredientes,
        { name: ingrediente, cantidad: 0 }
      ])
    }
  }
  return (
    <>
      <div className="ingredient-list-container">
        <h2>Elegi tus ingredientes!</h2>
        {Object.entries(ingredientes).map(([category, item]) => (
          <div key={category} className="ingredients-category">
            <h3>{category}</h3>
            <ul>
              {item.map((ingrediente) => (
                <li
                  key={ingrediente}
                  className='ingredient-item'
                  onClick={() => handleIngredientClick(ingrediente)}
                >
                  {ingrediente}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default IngredientsList
