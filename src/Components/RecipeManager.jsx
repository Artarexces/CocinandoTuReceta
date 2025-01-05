import React, { useState } from 'react';
import RecipeSummary from '../Components/CreateRecipe/RecipeSummary'
import RecipeHistory from '../Components/RecipeHistory/RecipeHistory';

const RecipeManager = () => {
    const [recipes, setRecipes] = useState(
        JSON.parse(localStorage.getItem('recipes')) || []
    );

    const saveRecipe = (newRecipe) => {
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    };

    const deleteRecipe = (recipeName) => {
        const updatedRecipes = recipes.filter((recipe) => recipe.name !== recipeName);
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    };

    return (
        <div>
            <RecipeSummary saveRecipe={saveRecipe}
                elegirIngredientes={elegirIngredientes} />
            <RecipeHistory recipes={recipes} deleteRecipe={deleteRecipe} />
        </div>
    );
};

export default RecipeManager;
