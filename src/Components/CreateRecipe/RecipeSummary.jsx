import React, { useState, useEffect } from 'react'
import './RecipeSummary.css'

const RecipeSummary = ({ saveRecipe, elegirIngredientes }) => {
  const [recipeName, setRecipeName] = useState('');
  const [nutritionalScore, setNutritionalScore] = useState(0);

  useEffect(() => {
    const score = elegirIngredientes.reduce(
      (total, ingrediente) => total + (ingrediente.cantidad || 0) * 10,
      0
    );
    setNutritionalScore(score);
  }, [elegirIngredientes]);

  const handleSave = () => {
    if (!recipeName.trim()) {
      alert('El nombre de la receta no puede estar vacío.');
      return;
    }

    const newRecipe = {
      name: recipeName,
      ingredientes: elegirIngredientes,
      nutritionalScore,
    };
    saveRecipe(newRecipe);
    setRecipeName('');
    alert('Receta guardada exitosamente!');
  };

  // Funcionalidades de guardados a base de objetos y su puntuacion cuando es ingresado cada ingrediente, este componente me costo bastante y tuve varios inconvenientes pero creo haberlo solventado de la mejor manera 


  return (
    <div className="recipe-summary">
      <h3>Ponle nombre a tu receta!</h3>
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <p>Puntaje nutricional: <strong>{nutritionalScore}</strong></p>
      <button onClick={handleSave}>Guardar Receta</button>
    </div>
  );
};

export default RecipeSummary;
