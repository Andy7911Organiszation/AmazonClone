import React, { Component } from 'react'
import imgAmazon from '../img/amazon.PNG'

export default class Nav extends Component {
    render() {
        return (
            <div>
               <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={imgAmazon} width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
      <div class="column is-one-quarter">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

        <a class="navbar-item">
          More
        </a>

    </div>
    </div>
    <div class="column is-half" >
    <div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>All</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money"/>
  </p>
  <p class="control">
    <a class="button is-warning">
    <i class="fa fa-search" aria-hidden="true"></i>
    </a>
  </p>
</div>
</div>
   
  </div>
  
</nav> 
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="column is-one-quarter">
    <div class="navbar-start">
      <a class="navbar-item">
        Deals Store
      </a>

      <a class="navbar-item">
        Best Sellers
      </a>

        <a class="navbar-item">
         New Realeases
        </a>
        <a class="navbar-item">
          Gift Ideas
        </a>
        

    </div>
    </div>
</nav>        
            </div>
        )
    }
}
