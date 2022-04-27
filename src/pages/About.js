import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
   <React.Fragment>
     
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <a href="index.html" class="nav-logo">
            <img src="./assetsZ/assets/logoZ.svg" alt="karan recipes" />
          </a>
          <button class="nav-btn btn">
            <i class="fas fa-align-justify"></i>
          </button>
        </div>
        <div class="nav-links">
        <Link to="/">Home</Link>
          <Link to="/about">About</Link> 
          <a href="tags.html" class="nav-link"> Dishes </a>
          <a href="recipes.html" class="nav-link"> Others </a>

          <div class="nav-link contact-link">
            <a href="contact.html" class="btn"> Help </a>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="page">
      <section class="about-page">
        <article>
          <h2>Karan Recipes specialises especially in South indian Cuisine</h2>
          <p>
            Although South food has been considered Primary,we serve North,Chinese and Western food too
          </p>
          <p>
            Feel free to contact us through the help button available...
            Happy Dining!!!
          </p>
          <a href="contact.html" class="btn"> Help </a>
        </article>
        
        <img
          src="./assetsZ/assets/south/aboutZ.jpg"
          alt="Dishes spread out"
          class="img about-img"
        />
      </section>
      <section class="featured-recipes">
        <h5 class="featured-title">Yummy Dishes by our Extraordinary Chefs</h5>
        <div class="recipes-list">
          
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/appam1.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>Appam</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
         
          <a href="dosarecipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/dosa2.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>Dosa</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
         
          <a href="idlyrecipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/idly3.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>Idly</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
         
        </div>
      </section>
    </main>
   
    <footer class="page-footer">
      <p>
        &copy; <span id="date"></span>
        <span class="footer-logo">KaranRecipes</span> Built by
        <a href="https://www.google.com/">Prabhakaran</a>
      </p>
    </footer>
    <script src="./js/app.js"></script>
    </React.Fragment>
  )
}
