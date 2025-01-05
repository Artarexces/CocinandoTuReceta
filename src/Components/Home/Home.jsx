import React from 'react'
import './Home.css'

const Home = ({ setNavegate }) => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Cocinando tu receta</h1>
        <p className='home-subtitle'>Crea y personaliza tu receta!</p>
        <button className="create-btn" onClick={() => setNavegate('create-recipe')}>Crear receta</button>
        <button className='history-btn' onClick={() => setNavegate('history-recipes')}>Guardadas</button>
      </div>
    </>
  )
}

export default Home
