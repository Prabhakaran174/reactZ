import React from 'react';
import { Link } from 'react-router-dom'
class Home extends React.Component{
    render(){
        return (
    <div>
        
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <a href="index.html" class="nav-logo">
            <img src="./assetsZ/assets/logoZ.svg" alt="Karan recipes" />
          </a>
          <button class="nav-btn btn">
            <i class="fas fa-align-justify"></i>
          </button>
        </div>
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dishes">Dishes</Link>
          <Link to="/others">Others</Link>

          <div class="nav-link contact-link">
            <a href="contact.html" class="btn"> Help </a>
          </div>
        </div>
      </div>
    </nav>
   
    <main class="page">
      
      <header class="hero">
        <div class="hero-container">
          <div class="hero-text">
            <h1>Karan Recipes</h1>
            <h4>Hasty and Tasty!</h4>
          </div>
        </div>
      </header>
      
      <section class="recipes-container">
       
        <div class="tags-container">
          <h4>recipes</h4>
          <div class="tags-list">
            <a href="tag-template.html">appam</a>
            <a href="tag-template.html">Dosa</a>
            <a href="tag-template.html">Idly</a>
            <a href="tag-template.html">Puri</a>
          </div>
        </div>
        
        <div class="recipes-list">
          
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/appam1.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>appam</h5>
            <p>Prep : 30 min| Cook : 15 min</p>
          </a>
         
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/dosa2.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>dosa</h5>
            <p>Prep : 20 min | Cook : 10 min</p>
          </a>
         
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/idly3.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>idly</h5>
            <p>Prep : 25 min | Cook : 10 min</p>
          </a>
         
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/puri4.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>puri</h5>
            <p>Prep : 25 min | Cook : 15 min</p>
          </a>
         
        </div>
       
      </section>
    </main>
    
    <footer class="page-footer">
      <p>
        &copy; <span id="date"></span>
        <span class="footer-logo">KaranRecipes</span> Done  by
        <a href="https://www.google.com/">Prabhakaran</a>
      </p>
    </footer>
    <script src="./js/app.js"></script>
    </div>
        );
}
}

export default Home;
