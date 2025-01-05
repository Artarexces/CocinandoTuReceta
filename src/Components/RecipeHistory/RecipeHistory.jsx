import React from 'react'
import RecipeCard from './RecipeCard'
import './RecipeHistory.css'

const RecipeHistory = ({ recipes, deleteRecipe, goBack }) => {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const savedRecipe = JSON.parse(localStorage.getItem('recipes')) || [];
  //   console.log("Recetas cargadas desde localStorage:", savedRecipe);
  //   setRecipes(savedRecipe);
  // }, []);

  // const deleteRecipe = (recipeName) => {
  //   const updateRecipes = recipes.filter((recipe) => recipe.name !== recipeName);
  //   setRecipes(updateRecipes);
  //   localStorage.setItem('recipes', JSON.stringify(updateRecipes))
  // }

  return (
    <div className='recipe-history'>
      <button onClick={goBack} className='goBack-btn'>Voler</button>
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
