import { set } from 'date-fns';
import React, {useState} from 'react';

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

    const REGEX_USERNAME = /\w{5,20}/;
    const REGEX_PHONE_NUMBER = /^[(]{0,1}(?=\d){10}(\d{3})(?:\)-|-){0,1}(\d{3})(?:-){0,1}(\d{4})(?!.)/;
    const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/;

    function onFormSubmit() {
       if (!checkis_TermsAndConditionsAccepted()) return;
    }

    function checkis_TermsAndConditionsAccepted () {
        let helpMessage_AcceptTermsAndConditions = (!is_TermsAndConditionsAccepted) ? "Please accept terms and Conditions" : " ";
        setTermsAndConditions_HelpText(helpMessage_AcceptTermsAndConditions);
        return is_TermsAndConditionsAccepted;
    }

    function onUserNameChange (e) {
        let helpMessage_Username = (!e.target.value.match(REGEX_USERNAME))? "Username must be between 5 and 20 chars" :  " ";
        setUsername_HelpText(helpMessage_Username);
    }

    // Return the value inside the input field when the user types so we can we it later to confirme the password
    function onPasswordChange(e) {
        let helpMessage_Password = (!e.target.value.match(REGEX_PASSWORD))? "5 chars min 20 Max and at least 1 Uppercase 1 Lowercase 1 digit" :  " ";
        setPassword_HelpText(helpMessage_Password);
        set_Password(e.target.value); // For the second password
    }

    function onPasswordChange2(e) {
        let helpMessage_ConfirmPassword = (e.target.value !==  password)? "Password must matches the previous": " ";
        setConfirmPassword_HelpText(helpMessage_ConfirmPassword);
    }

    function onPhoneNumberChange(e) {
        let helpMessage_Phone =  (!e.target.value.match(REGEX_PHONE_NUMBER) &&
                                     e.target.value.length > 0 ) ? 
                                                "Please enter a valid phone Number" : " ";
        setPhoneNumber_HelpText(helpMessage_Phone);
    }

    return (
        <div id="custom-2" className="is-ligth px-3">
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
                        <label htmlFor="is_termsAndConditions" className="checkbox" onClick={() => {set_IsTermsAndCondidtionsAccepted(value =>!value)}} >
                            <input className="mr-2" id="is_termsAndConditions" name="is_termsAndConditions" type="checkbox" defaultChecked={is_TermsAndConditionsAccepted}/>
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                    <p className="help p1-1 errorMessage">{termsAndCondition_HelpText}</p>
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