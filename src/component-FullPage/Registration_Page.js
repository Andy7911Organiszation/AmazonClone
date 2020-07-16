import React from 'react';

export default function Registration_Page () {
    return (
        <section id="form-section" class="">
            
        <form  class="column is-6 is-offset-3 px-0 pt-0 pb-5">
            <div class="field pb-5">
                <h1 class="title is-3 has-background-primary is-large c-center">Register</h1>
            </div>

            <div id="custom" class="is-ligth px-3">

               <div class="columns field">
                    <div class="column">
                        <label class="label">First Name</label>
                        <div class="control">
                            <input class="input" name="firstname"type="text" placeholder="First Name" />
                        </div>
                        <p class="help">Help Text</p>
                    </div>
                    
                    <div class="column">
                        <label class="label">Last Name</label>
                        <div class="control">
                            <input class="input" type="text" name="lastname" placeholder="Name" />
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input type="email" name="emailAddress" class='input' placeholder="exemple@gmail.com" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>
                <div id="birthday" class="field">
                    <label class="label has-text-centered">Birthday</label>
                    <div class="columns is-mobile">
                        <p class="control column">
                            <span class="select is-fullwidth" id="year">
                                <select name="year">
                                    <option value="" disabled selected hidden>Select Year</option>
                                    <option value="">2020</option>
                                </select>
                            </span>
                        </p>
                        <p class="control column">
                            <span class="select is-fullwidth" id="month">
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
                        <p class="control column ">
                            <span class="select is-fullwidth" id="day">
                                <select name="day" >
                                    <option value="" disabled selected hidden>Day</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </span>
                        </p>
                    </div>
                </div>
           
                <div id="buttons" class="field has-addons pt-4  columns">
                    <p class="control column ">
                        <a class="button is-ligth is-fullwidth">
                            Cancel
                        </a>    
                    </p>
                    <p id="btn_next"class="control column">
                        <a class="button is-primary has-icons-right is-fullwidth">
                            Next
                        </a>
                    </p>
                </div>

                <div class="field has-text-centered">
                    <a class="">Already a memeber Sign In</a>
                </div>
            </div>
            <div id="custom-2" class="is-ligth px-3">
                <div class="columns field">
                    <div class="column">
                        <label class="label">Username</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="Input Username"/>
                        </div>
                    </div>
                    <div class="column">
                        <label class="label">Phone Number</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="(514)-333-3333"/>
                        </div>
                    </div>
                </div>
            </div>

        </form>
                    
    </section>
    );
}