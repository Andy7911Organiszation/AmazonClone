import React, { Component } from 'react'
import imgAmazon from '../img/amazon.PNG';

import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
              <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <a className="navbar-item" href="https://bulma.io">
                    <img src={imgAmazon} width="112" height="28"/>
                  </a>

                  <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                
                <div className="column is-two-fifths" >
                  <div className="field has-addons">
                    <p className="control">
                      <span className="select">
                        <select>
                          <option>All</option>
                          <option>£</option>
                          <option>€</option>
                        </select>
                      </span>
                    </p>
                    <p className="control is-expanded">
                      <input className="input" type="text" placeholder="Search Item"/>
                    </p>
                    <p className="control">
                      <a className="button is-warning">
                      <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </p>
                  </div>
                </div>
                 <div className="column">
                    <ul className="navbar-end">
                      <li className="navbar-item">
                        Account & List
                      </li>

                      <li className="navbar-item">
                        Return & order
                      </li>

                      <li className="navbar-item">
                        Try prime
                      </li>

                      <li className="navbar-item">
                        <Link to="/Register">Register</Link>
                      </li>
                      <li className="navbar-item">
                        <Link to="/Login">Login</Link>
                      </li>

                    </ul>
                  </div>
                
                </div>
                
              </nav> 
              <nav className="navbar is-dark" role="navigation" aria-label="main navigation" style={{marginBottom:100}}>
                <div className="navbar-brand">
                  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>

                <div className="column is-half">
                  <div className="navbar-start">
                    <a className="navbar-item">
                      Deals Store
                    </a>

                    <a className="navbar-item">
                      Best Sellers
                    </a>

                    <a className="navbar-item">
                      New Realeases
                    </a>
                    <a className="navbar-item">
                      Gift Ideas
                    </a>
                  </div>
                </div>
              </nav>

            </div>
        )
    }
}
