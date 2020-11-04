import React, {useEffect, useRef, useState} from 'react';

export default function RegistrationPart2 (props) {

    // Ascii code for the empty character is &#8193
    const [username_HelpText,setUsername_HelpText] = useState(" ");
    const [phoneNumber_HelpText,setPhoneNumber_HelpText] = useState(" ");
    const [password_HelpText,setPassword_HelpText] = useState(" ");
    const [confirmPassword_HelpText, setConfirmPassword_HelpText] = useState(" ");
    const [address_HelpText,setAdress_HelpText] = useState(" ");
    const [termsAndCondition_HelpText,setTermsAndConditions_HelpText] = useState(" ");

    const [is_TermsAndConditionsAccepted, set_IsTermsAndCondidtionsAccepted] = useState(false);

    const [password, set_Password] = useState("");

    const registerPart2 = useRef();

    const REGEX_USERNAME = /\w{5,20}/;
    const REGEX_PHONE_NUMBER = /^[(]{0,1}(?=\d){10}(\d{3})(?:\)-|-){0,1}(\d{3})(?:-){0,1}(\d{4})(?!.)/;
    const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/;

    const [is_userNameValid, set_IsUserNameValid] = useState(false);
    const [is_phoneNumberValid, set_IsPhoneNumberValid] = useState(false);
    const [is_passwordValid,set_IsPasswordValid] = useState(false);
    const [is_password2Valid,set_IsPassword2Valid] = useState(false);
    const [is_adressValid,set_IsAdressValid] = useState(false); // Need to atomize the field 

    useEffect(() => {
        props.passChildData(registerPart2);
    }, [registerPart2])

    function onFormSubmit() {

        let array_IsFormPart2FillCorrectly = [];  
        
        // Boolean functions inside array 
        array_IsFormPart2FillCorrectly.push( checkis_TermsAndConditionsAccepted() );
        array_IsFormPart2FillCorrectly.push( check_ifUserNameValid() );
        array_IsFormPart2FillCorrectly.push( check_ifPasswordValid() );
        array_IsFormPart2FillCorrectly.push( check_ifPassword2Valid() );

        //phone number and address is optional for now
        

        let is_formPart2WellFill = !array_IsFormPart2FillCorrectly.includes(false);
        
        if (!is_formPart2WellFill ){
            return;
        }
        
        console.log("success");
        //submit function here
    }

    function checkis_TermsAndConditionsAccepted () {
        let helpMessage_AcceptTermsAndConditions = (!is_TermsAndConditionsAccepted) ? "** Please accept the terms and Conditions **" : " ";
        setTermsAndConditions_HelpText(helpMessage_AcceptTermsAndConditions);
        return is_TermsAndConditionsAccepted;
    }

    // This function will be eventually modifiy 
    // The username is unique so we need to check the database for any data
    function onUserNameChange (e) {
        let is_help_MessageUserNameShown = (!e.target.value.match(REGEX_USERNAME))? true: false;
        let helpMessage_Username = (is_help_MessageUserNameShown)? "Username must be between 5 and 20 chars" :  " ";
        setUsername_HelpText(helpMessage_Username);

        set_IsUserNameValid(!is_help_MessageUserNameShown);
    }

    // Return the value inside the input field when the user types so we can we it later to confirme the password
    function onPasswordChange(e) {
        let is_help_Message_PasswordShown =  (!e.target.value.match(REGEX_PASSWORD)) ? true : false;
        let helpMessage_Password = (is_help_Message_PasswordShown)? "5 chars min 20 Max and at least 1 Uppercase 1 Lowercase 1 digit" :  " ";
        setPassword_HelpText(helpMessage_Password);
        set_Password(e.target.value); // For the second password

        set_IsPasswordValid(!is_help_Message_PasswordShown);
    }

    function onPasswordChange2(e) {
        let is_help_MessagePassword2Shown = (e.target.value !==  password)? true: false;
        let helpMessage_ConfirmPassword = (is_help_MessagePassword2Shown)? "Password must matches the previous": " ";
        setConfirmPassword_HelpText(helpMessage_ConfirmPassword);

        set_IsPassword2Valid(!is_help_MessagePassword2Shown);
    }

    function onPhoneNumberChange(e) {
        let helpMessage_Phone =  (!e.target.value.match(REGEX_PHONE_NUMBER) &&
                                     e.target.value.length > 0 ) ? 
                                                "Please enter a valid phone Number" : " ";
        setPhoneNumber_HelpText(helpMessage_Phone);
    }

    /////////////////////////////////////
    //   VALIDATION                   //
    ///////////////////////////////////

    function check_ifUserNameValid () {
        if (!is_userNameValid) {
            setUsername_HelpText("** Please Enter a Valid Username **");
            return false;
        }

        return true;
    }

    function check_ifPasswordValid (){
        if (!is_passwordValid) {
            setPassword_HelpText("** Please enter a valid password**");
            return false;
        }

        return true;
    }

    function check_ifPassword2Valid () {
        if (!is_password2Valid) {
            setConfirmPassword_HelpText("** Please enter a valid password **");
            return false;
        }
        return true;
    }


    return (
        <div id="custom-2" ref={registerPart2} className="is-ligth px-3">
                <div className="columns field">
                    <div className="column">
                        <label className="label">Username</label>
                        <div className="control">
                            <input type="text" name="username" className="input" placeholder="Input Username" onChange={onUserNameChange}/>
                        </div>
                        <p className="help pl-1 errorMessage">{username_HelpText}</p>
                    </div>
                    <div className="column">
                        <label className="label">Phone Number (optional)</label>
                        <div className="control">
                            <input type="text" name="phoneNumber" className="input" placeholder="(514)-333-3333" onChange={onPhoneNumberChange}/>
                        </div>
                        <p className="help pl-1 errorMessage">{phoneNumber_HelpText}</p>
                    </div>
                </div>
                <div className="columns field">
                    <div className="column">
                        <label className="label">Password</label>
                        <div className="control has-icons-right">
                            <input className="input" name="password" type="password" placeholder="Password" onChange={onPasswordChange} />
                            <span className="icon is-small is-right">
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <p className="help p1-1 errorMessage">{password_HelpText}</p>
                    </div>
                    <div className="column">
                        <label className="label">Confirm Password</label>
                        <div className="control has-icons-right">
                            <input className="input" name="password2" type="password" onChange={onPasswordChange2}/>
                            <span className="icon is-small is-right">
                                <i className="fa fa-check"></i>
                            </span> 
                        </div>
                        <p className="help p1-1 errorMessage">{confirmPassword_HelpText}</p>
                    </div>
                </div>
                <div className="columns field">
                    <div className="column">
                        <label className="label has-text-centered">Adress (optional)</label>
                        <div className="control has-icons-left">
                            <input className="input" name="adress" type="text" placeholder="3800 Sherbrooke St E, Montreal, Quebec H1X 2A2" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-home"></i>
                            </span>
                        </div>
                        <p className="help p1-1 errorMessage">{address_HelpText}</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label htmlFor="is_termsAndConditions" className="checkbox" onChange={() => set_IsTermsAndCondidtionsAccepted(value =>!value)} >
                            <input className="mr-2" id="is_termsAndConditions" name="is_termsAndConditions" type="checkbox" />
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>
                <div className="columns">
                    <div className="container is-full">
                        <p className="help p1-1 errorMessage has-text-centered">{termsAndCondition_HelpText}</p>
                    </div>
                </div>
                <div id="buttons" className="field has-addons pt-4 columns">
                    <p className="control column" onClick={props.changeToFirstForm}>
                        <a className="button is-ligth is-fullwidth">
                            Return
                        </a>    
                    </p>
                    <p id="btn_next" className="control column" onClick={onFormSubmit}>
                        <a className="button is-primary has-icons-right is-fullwidth">
                            Submit
                        </a>
                    </p>
                </div>
            </div>
    )

}