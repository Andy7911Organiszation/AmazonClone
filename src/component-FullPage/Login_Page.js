import React from 'react';
import '../style/login-registration.css';

import { Link } from 'react-router-dom';

// This function is render without a navbar
export default function Login_Page ()  {
      
        
        return (
            <section id="form-section">
            
            <form  className="column is-6 is-offset-3 px-0 pt-0 pb-5" >
                <div className="field pb-5">
                    <h1 className="title is-3 has-background-primary is-large c-center">Login</h1>
                </div>
    
                <div id="custom" className="is-ligth px-3">
                   <div className="field">
                        <label className="label">Identification</label>
                        <div className="control">
                            <input className="input" name="firstname"type="text" placeholder="Username or Email Address" />
                        </div>
                    </div>
                
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="text" name="lastname" placeholder="Password" />
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
                            <a className="button is-primary is-fullwidth">
                                Login
                            </a>
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
    