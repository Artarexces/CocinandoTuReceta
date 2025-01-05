# Cocinando tu receta

Este proyecto es una aplicación web creada con React, que permite a los usuarios crear y guardar recetas personalizadas. Los usuarios pueden seleccionar ingredientes de diferentes categorías (proteínas, carbohidratos, vegetales, y otros), definir la cantidad de cada ingrediente y luego ver un resumen de la receta con un puntaje nutricional calculado automáticamente.

## Características

- **Crear recetas**: Los usuarios pueden elegir ingredientes y cantidades, y luego generar una receta personalizada.
- **Historial de recetas**: Se pueden guardar las recetas creadas y acceder a ellas en cualquier momento.
- **Puntaje nutricional**: La aplicación calcula un puntaje nutricional basado en los ingredientes seleccionados, lo cual permite una evaluación rápida de la receta.

## Estructura del Proyecto

El proyecto está dividido en los siguientes componentes:

- **Home**: Pantalla principal que permite navegar a otras secciones de la aplicación, como la creación de recetas o el historial.
- **CreateRecipe**: Componente que permite a los usuarios seleccionar ingredientes y definir cantidades.
- **IngredientsList**: Lista de ingredientes agrupados por categorías.
- **RecipeBuilder**: Permite a los usuarios ajustar la cantidad de cada ingrediente seleccionado.
- **RecipeSummary**: Muestra un resumen de la receta y su puntaje nutricional antes de guardarla.
- **RecipeHistory**: Muestra las recetas guardadas, permitiendo eliminarlas si es necesario.

## Estilos

Los estilos fueron implementados de manera sencilla, priorizando la lógica y la interacción entre los componentes. La estructura de los estilos está organizada para proporcionar una experiencia de usuario clara, pero está en una etapa inicial y puede mejorarse, especialmente en la parte visual, para hacerla más atractiva y consistente en toda la aplicación.

**Nota**: La interfaz de usuario se puede mejorar, sobre todo en la disposición de los elementos y el uso de colores, pero debido a limitaciones de tiempo, el enfoque principal fue en la funcionalidad y la interacción entre los componentes.
