import { isExists , isDate } from 'date-fns';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


export default function RegistrationPart1 (props) {

    // Ascii code for the empty character is &#8193
    const [firstName_HelpText, setFirstName_HelpText] = useState(" ");
    const [lastName_HelpText,setLastName_HelpText] = useState(" ");
    const [emailAdress_HelpText,setEmailAdress_HelpText] = useState(" ");
    const [birthday_HelpText,setBirthday_HelpText] = useState(" ");

    const [month,set_Month] = useState();
    const [day,set_Day] = useState();
    const [year, set_Year] = useState();

    const REGEX_NAME = /^[a-zA-Z]+$/;
    const REGEX_EMAILADRESS = /[a-zA-Z0-9-_]{2,30}[@]{1}[a-z]{3,20}[.]{1}[a-z]{0,4}/;

    function onFirstNameChange(e) {
        let help_MessageFirstName = (!e.target.value.match(REGEX_NAME))? "Please Enter a Valid  First Name !!!" : " ";
        setFirstName_HelpText(help_MessageFirstName);
    }

    function onLastNameChange(e) {
        let help_MessageLastName = (!e.target.value.match(REGEX_NAME)) ? "Please Enter a Valid Last Name !!!": " ";
        setLastName_HelpText(help_MessageLastName);
    }

    function onEmailAdressChange(e) {
        let help_MessageEmailAdress = (!e.target.value.match(REGEX_EMAILADRESS)) ? "Please Enter a Valid Email Adress !!!" : " ";
        setEmailAdress_HelpText(help_MessageEmailAdress);
    }


    function populateSelectYear () {
        let years = [];
        for (let i = new Date().getFullYear() ; i >= new Date().getFullYear() - 130; i --) {
            years.push(i);
        }
        return years;
    }

    let listYearOfYear = populateSelectYear().map((value ,i) => {
        return <option value={value}>{value}</option>;
    })

    function populateDays() {
        let days = [];
        for (let i = 1; i <= 31 ; i++ ) {
            days.push(i);
        }
        return days;
    }

    let listDays = populateDays().map((value,i) => {
        return <option value={value}>{value}</option>
    })

    function onYearChange(e) {
        set_Year(e.target.value);
    }

    function onDayChange (e) { 
        set_Day(e.target.value);
    }

    function onMonthChange (e) {
        set_Month(e.target.value);
    }


    function is_BirthdayValid (day,month,year) {
        // The method moment Js library Function
        let returnValue = moment(year + "/" + month + "/" + day,"YYYY-MM-DD",false ).isValid();
        let help_MessageBirthDay = (!returnValue) ? "Please Enter a Valid Birthday" : " ";
        setBirthday_HelpText(help_MessageBirthDay);
        return returnValue;
    }


    ///////////////////////////////////////////////
    //            FORM VALIDATION
    /////////////////////////////////////////////


    function validateRegisterFormPart1() {
       
        if (!is_BirthdayValid(day,month,year)) 
            return;

        props.changeToSecondForm();
    }


    
    return (
        <div id="custom" className="is-ligth px-3">
               <div className="columns field">
                    <div className="column">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input className="input" name="firstname" type="text" placeholder="First Name" onChange={onFirstNameChange} />
                        </div>
                        <p className="help pl-1 errorMessage">{firstName_HelpText}</p>
                    </div>
                    
                    <div className="column">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input className="input" type="text" name="lastname" placeholder="Name" onChange={onLastNameChange}/>
                        </div>
                        <p className="help pl-1 errorMessage">{lastName_HelpText}</p>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input type="email" name="emailAddress" className='input' placeholder="exemple@gmail.com" onChange={onEmailAdressChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                        <p className="help pl-1 errorMessage">{emailAdress_HelpText}</p>
                    </div>
                </div>
                <div id="birthday" className="field">
                    <label className="label has-text-centered">Birthday</label>
                    <div className="columns is-mobile">
                        <p className="control column">
                            <span className="select is-fullwidth" id="year">
                                <select name="year" onChange={onYearChange}>
                                    <option value="" disabled selected hidden>Select Year</option>
                                    {listYearOfYear}
                                </select>
                            </span>
                        </p>
                        <p className="control column">
                            <span className="select is-fullwidth" id="month">
                                <select name="month" onChange={onMonthChange}>
                                    <option value="" disable selected hidden>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">Febuary</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </span>
                        </p>
                        <p className="control column ">
                            <span className="select is-fullwidth" id="day">
                                <select name="day"  onChange={onDayChange}>
                                    <option value="" disabled selected hidden>Day</option>
                                    {listDays}
                                </select>
                            </span>
                        </p>
                    </div>
                    <p className="help p1-1 errorMessage">{birthday_HelpText}</p>
                </div>
           
                <div id="buttons" className="field has-addons pt-4 columns">
                    <p className="control column ">
                        <a className="button is-ligth is-fullwidth">
                            Cancel
                        </a>    
                    </p>
                    <p id="btn_next" className="control column" onClick={validateRegisterFormPart1}>
                        <a className="button is-primary has-icons-right is-fullwidth">
                            Next
                        </a>
                    </p>
                </div>

                <div className="field has-text-centered">
                    <Link to="/Login">Already a memeber Sign In</Link>
                </div>
            </div>
 
    )
}