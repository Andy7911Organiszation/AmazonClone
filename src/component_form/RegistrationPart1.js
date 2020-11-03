import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';


export default function RegistrationPart1 (props) {

    // Ascii code for the empty character is &#8193
    const [firstName_HelpText, setFirstName_HelpText] = useState(" ");
    const [lastName_HelpText,setLastName_HelpText] = useState(" ");
    const [emailAdress_HelpText,setEmailAdress_HelpText] = useState(" ");
    const [birthday_HelpText,setBirthday_HelpText] = useState(" ");

    const [is_firstNameValid, set_IsFirstNameValid] = useState(false);
    const [is_lastNameValid, set_IsLastNameValid] = useState(false);
    const [is_emailAdressValid,set_IsEmailAdressValid] = useState(false);
    // const [is_birthdaySetAndValid, set_IsBirthdaySetValid] = useState(false);  Not Needed

    const [month,set_Month] = useState();
    const [day,set_Day] = useState();
    const [year, set_Year] = useState();

    const registerPart1Ref = useRef();

    const REGEX_NAME = /^[a-zA-Z]+$/;
    const REGEX_EMAILADRESS = /[a-zA-Z0-9-_]{2,30}[@]{1}[a-z]{3,20}[.]{1}[a-z]{0,4}/;

    function onFirstNameChange(e) {
        // Set ErrorMessage for onchange
        let is_help_MessageFirstNameShown = (!e.target.value.match(REGEX_NAME))? true : false;
        let help_MessageFirstName = (is_help_MessageFirstNameShown) ? "Please Enter a Valid First Name !!!" : " "; 
        setFirstName_HelpText(help_MessageFirstName);

        // Value for when the user presseed Next Button
        set_IsFirstNameValid(!is_help_MessageFirstNameShown);
    }

    function onLastNameChange(e) {
        let is_help_MessageLastNameShown = (!e.target.value.match(REGEX_NAME)) ? true: false;
        let help_MessageLastName = (is_help_MessageLastNameShown) ? "Please Enter a Valid Last Name !!!": " ";
        setLastName_HelpText(help_MessageLastName);

        // Value for when the user presses the Next Button
        set_IsLastNameValid(!is_help_MessageLastNameShown);
    }

    function onEmailAdressChange(e) {
        let is_help_MessageEmailAdressShown = (!e.target.value.match(REGEX_EMAILADRESS)) ? true : false;
        let help_MessageEmailAdress = (is_help_MessageEmailAdressShown) ? "Please Enter a Valid Email Adress !!!" : " ";
        setEmailAdress_HelpText(help_MessageEmailAdress);

        // Value for when the user pressed the Next Button
        set_IsEmailAdressValid(!is_help_MessageEmailAdressShown);
    }

    //
    // Birthday Functions
    //

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
        let returnValue = moment(year + "/" + month + "/" + day,"YYYY/MM/DD", true).isValid();
        let help_MessageBirthDay = (!returnValue) ? "Please Enter a Valid Birthday" : " ";
        setBirthday_HelpText(help_MessageBirthDay);
        return returnValue;
    }

    //
    function check_IsFirstNameValid() {

        if (!is_firstNameValid) {
            setFirstName_HelpText("** Please Enter a Valid First Name !!! **");
            return false;
        }

        return true;
    }

    function check_IsLastNameValid() {
        if (!is_lastNameValid) {
            setLastName_HelpText("** Please Enter a Valid Last Name !!! **");
            return false;
        }
        return true;
    }

    function check_IsEmailAddressValid() {
        if(!is_emailAdressValid) {
            setEmailAdress_HelpText("** Please Enter a Valid Email Adress !!! ** ");
            return false;
        }
        return true;
    }
    
    ///////////////////////////////////////////////
    //            FORM VALIDATION               //
    /////////////////////////////////////////////

    // Checks all inputs and send an errorMessage if the form is not fill correctly

    useEffect( () => {

        props.passChildData(registerPart1Ref);
    }, [registerPart1Ref])

    
    function validateRegisterFormPart1() {
        console.log("OnClick Event ");
        console.log(registerPart1Ref + "... Reference");
        let array_isFormFieldsWellFill = [];

        array_isFormFieldsWellFill.push( is_BirthdayValid(day,month,year) );
        array_isFormFieldsWellFill.push( check_IsFirstNameValid() );
        array_isFormFieldsWellFill.push( check_IsLastNameValid() );
        array_isFormFieldsWellFill.push( check_IsEmailAddressValid() );

        let is_formPart1WellFill = !array_isFormFieldsWellFill.includes(false);

        // If the form is not well fill, then we return with errorMessages
        console.log(array_isFormFieldsWellFill);
        console.log(is_formPart1WellFill);

        if (!is_formPart1WellFill) {
            return;
        }
        // Pass value to make RegisterPart1 invisible
        props.passChildData(registerPart1Ref);
        console.log(registerPart1Ref + "... Reference");

        props.changeToSecondForm();
    }

    ////////////////////////////////
    ///   Getting the <div id="custom" /> reference
    /////////////////////////////

    function returnRegisterPart1Ref() {
        props.passChildData(registerPart1Ref);
    }

    return (
        <div id="custom" ref={registerPart1Ref} className="is-ligth px-3">
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