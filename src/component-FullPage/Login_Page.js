import React, { Component } from 'react';
import '../style/login-registration.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import apiClient from '../services/api';

// This function is render without a navbar
export default class Login_Page extends Component {
      
        state={
            email:'',
            password:''

        }
        
         handlelogin=(e)=>{
            
             debugger
             e.preventDefault();
             const data = new FormData(document.getElementById('myform'))
              const email = data.get('email')
              const password = data.get('password')

              this.setState({email,password});
             
              axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response=>
              axios.post('http://localhost:8000/api/login',data,{
                  email:data.get('email'),
                  password:data.get('password')
                
              }).then(response=>console.log(response))
              )
            }
        render(){
           
        return (
            <section id="form-section">
            
            <form  id='myform'className="column is-6 is-offset-3 px-0 pt-0 pb-5" >
                <div className="field pb-5">
                    <h1 id="h1" className="title is-3 has-background-primary is-large c-center">Login</h1>
                </div>
    
                <div id="custom" className="is-ligth px-3">
                   <div className="field">
                        <label className="label">Identification</label>
                        <div className="control">
                            <input className="input" name="email"type="text" placeholder="Username or Email Address" />
                        </div>
                    </div>
                
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="text" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="checkbox">
                            <input className="mr-1" type="checkbox" />
                            Remember Me
                        </label>
                    </div>
    
                    <div id="buttons" className="field pt-4">
                        <p id="btn_next"className="control">
                            <button className="button is-primary is-fullwidth"type='submit' onClick={(event)=>this.handlelogin(event)}>
                                Login
                            </button>
                        </p>
                    </div>
                    <hr />
    
                    <div className="field">  
                        <p id="facebook" className="control">
                            <a className="button is-fullwidth c-facebook-background-color">
                                <i className="fab fa-facebook mr-2"></i>
                                Login With Facebook
                            </a>
                        </p>
                    </div>
    
                    <div className="columns">
                        <a href="#" className="column has-text-centered">Forgot Password</a>
                        <Link to="Register" className="column has-text-centered">Not a member : Sign Up</Link>
                    </div>
                </div>
        
    
            </form>
                        
        </section>
        );
    }
    }
    