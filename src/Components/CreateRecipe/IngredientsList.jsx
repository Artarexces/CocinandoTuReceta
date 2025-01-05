import React from 'react'
import './IngredientsList.css'

// aca es donde declare cada ingrediente por categoria , al principio era distinta, pero no me convencia asi que tuve que reformularlo
const IngredientsList = ({ elegirIngredientes, setElegirIngredientes }) => {
  const ingredientes = {
    Proteinas: ['Carne', 'Pollo', 'Huevos', 'Tofu'],
    Carbohidratos: ['Papas', 'Arroz', 'Pastas', 'Pan'],
    Vegetales: ['Cebolla', 'Zanahoria', 'Lechuga', 'Tomate'],
    Otros: ['Sal', 'Aceite', 'Especias'],
  }

  // Funcion para sumar ingredientes con su nombre 
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
        {/* No conocia el metodo Object.entries me sirvio muchisimo y me encanto !, tuve que cambiar la logica de arriba pero me gusto este resultado */}
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
