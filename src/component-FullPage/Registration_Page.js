import React from 'react';

import { FontAwesome } from '@fortawesome/fontawesome-free';

import { Link } from 'react-router-dom';

// This page is render without a header
export default function Registration_Page () {
    return (
        <section id="form-section">
            
        <form  className="column is-6 is-offset-3 px-0 pt-0 pb-5">
            <div className="field pb-5">
                <h1 className="title is-3 has-background-primary is-large c-center">Register</h1>
            </div>

            <div id="custom" className="is-ligth px-3">
               <div className="columns field">
                    <div className="column">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input className="input" name="firstname"type="text" placeholder="First Name" />
                        </div>
                        <p className="help pl-1">Help Text</p>
                    </div>
                    
                    <div className="column">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input className="input" type="text" name="lastname" placeholder="Name" />
                        </div>
                        <p className="help pl-1">Help Text</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input type="email" name="emailAddress" className='input' placeholder="exemple@gmail.com" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                        <p className="help pl-1">Help Text</p>
                    </div>
                </div>
                <div id="birthday" className="field">
                    <label className="label has-text-centered">Birthday</label>
                    <div className="columns is-mobile">
                        <p className="control column">
                            <span className="select is-fullwidth" id="year">
                                <select name="year">
                                    <option value="" disabled selected hidden>Select Year</option>
                                    <option value="">2020</option>
                                </select>
                            </span>
                        </p>
                        <p className="control column">
                            <span className="select is-fullwidth" id="month">
                                <select name="month">
                                    <option value="" disable selected hidden>Month</option>
                                    <option value="January">January</option>
                                    <option value="Febuary">Febuary</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </span>
                        </p>
                        <p className="control column ">
                            <span className="select is-fullwidth" id="day">
                                <select name="day" >
                                    <option value="" disabled selected hidden>Day</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </span>
                        </p>
                    </div>
                </div>
           
                <div id="buttons" className="field has-addons pt-4  columns">
                    <p className="control column ">
                        <a className="button is-ligth is-fullwidth">
                            Cancel
                        </a>    
                    </p>
                    <p id="btn_next" className="control column">
                        <a className="button is-primary has-icons-right is-fullwidth">
                            Next
                        </a>
                    </p>
                </div>

                <div className="field has-text-centered">
                    <Link to="/Login">Already a memeber Sign In</Link>
                </div>
            </div>
            <div id="custom-2" className="is-ligth px-3">
                <div className="columns field">
                    <div className="column">
                        <label className="label">Username</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Input Username"/>
                        </div>
                        <p className="help pl-1">Help Text</p>
                    </div>
                    <div className="column">
                        <label className="label">Phone Number</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="(514)-333-3333"/>
                        </div>
                        <p className="help pl-1">Help Text</p>
                    </div>
                </div>
            </div>

        </form>
                    
    </section>
    );
}