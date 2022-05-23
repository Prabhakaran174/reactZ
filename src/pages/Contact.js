import React from 'react'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
   <React.Fragment>
       
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
          <a href="tags.html" class="nav-link"> Dishes</a>
          <a href="recipes.html" class="nav-link"> Recipes </a>

          <div class="nav-link contact-link">
            <a href="contact.html" class="btn"> Help </a>
          </div>
        </div>
      </div>
    </nav>
 
    <main class="page">
     <section class="contact-container">
          <article class="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Feel free to contact us through mail or the toll free number
            </p>
            <p>available from 10AM-7PM.</p>
            <p>
              Kindly leave a feedback what you feel about us
            </p>
          </article>
          <article>
            <form class="form contact-form">
              <div class="form-row">
                <label html="name" class="form-label">your name</label>
                <input type="text" name="name" id="name" class="form-input" />
              </div>
              <div class="form-row">
                <label html="email" class="form-label">your email</label>
                <input type="text" name="email" id="email" class="form-input" />
              </div>
              <div class="form-row">
                <label html="message" class="form-label">message</label>
                <textarea name="message" id="message" class="form-textarea"></textarea>
              </div>
              <button type="submit" class="btn btn-block">
                submit
              </button>
            </form>
          </article>
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
            <h5>appam</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
         
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/dosa2.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>Dosa</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </a>
          
          <a href="single-recipe.html" class="recipe">
            <img
              src="./assetsZ/assets/south/recipesX/idly3.jpg"
              class="img recipe-img"
              alt=""
            />
            <h5>idly</h5>
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