import React, {useState} from 'react';

export default function RegistrationPart2 (props) {

    // Ascii code for the empty character is &#8193
    const [username_HelpText,setUsername_HelpText] = useState(" ");
    const [phoneNumber_HelpText,setPhoneNumber_HelpText] = useState(" ");
    const [password_HelpText,setPassword_HelpText] = useState(" ");
    const [confirmPassword_HelpText, setConfirmPassword_HelpText] = useState(" ");
    const [address_HelpText,setAdress_HelpText] = useState(" ");
    const [is_TermsAndConditionsAccepted, set_IsTermsAndCondidtionsAccepted] = useState(false);

    const REGEX_USERNAME = /\w{5,20}/;
    const REGEX_PHONE_NUMBER = /^[(]{0,1}(?=\d){10}(\d{3})(?:\)-|-){0,1}(\d{3})(?:-){0,1}(\d{4})(?!.)/;
    const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

    function onFormSubmit() {
        
    }

    function checkis_TermsAndConditionsAccepted () {
        set_IsTermsAndCondidtionsAccepted(value => !value);
        let helpMessage_AcceptTermsAndConditions = (!is_TermsAndConditionsAccepted) ? "Please accept terms and Conditions" : " ";
    }

    function onUserNameChange (e) {
        let helpMessage_Username = (!e.target.value.match(REGEX_USERNAME))? "Username must be between 5 and 20 chars" :  " ";
        setUsername_HelpText(helpMessage_Username);
    }

    function onPasswordChange(e) {
        let helpMessage_Password = (!e.target.value.match(REGEX_PASSWORD))? "5 chars min 1 Up 1 Lo 1 char min" :  " ";
        setPassword_HelpText(helpMessage_Password);
    }

    function onPhoneNumberChange(e) {
        let helpMessage_Phone =  (!e.target.value.match(REGEX_PHONE_NUMBER) &&
                                     e.target.value.length > 0 ) ? 
                                                "Please enter a valid phone Number" : " "
        setPhoneNumber_HelpText(helpMessage_Phone);
    }

    return (
        <div id="custom-2" className="is-ligth px-3">
                <div className="columns field">
                    <div className="column">
                        <label className="label">Username</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Input Username" onChange={onUserNameChange}/>
                        </div>
                        <p className="help pl-1 errorMessage">{username_HelpText}</p>
                    </div>
                    <div className="column">
                        <label className="label">Phone Number (optional)</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="(514)-333-3333" onChange={onPhoneNumberChange}/>
                        </div>
                        <p className="help pl-1 errorMessage">{phoneNumber_HelpText}</p>
                    </div>
                </div>
                <div className="columns field">
                    <div className="column">
                        <label className="label">Password</label>
                        <div className="control has-icons-right">
                            <input className="input" type="password" placeholder="Password" />
                            <span className="icon is-small is-right">
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <p className="help p1-1 errorMessage">{password_HelpText}</p>
                    </div>
                    <div className="column">
                        <label className="label">Confirm Password</label>
                        <div className="control has-icons-right">
                            <input className="input" type="password" />
                            <span className="icon is-small is-right">
                                <i className="fa fa-check"></i>
                            </span> 
                        </div>
                        <p className="help p1-1 errorMessage">{confirmPassword_HelpText}</p>
                    </div>
                </div>
                <div className="columns field">
                    <div className="column">
                        <label className="label has-text-centered">Adress</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" placeholder="3800 Sherbrooke St E, Montreal, Quebec H1X 2A2" />
                            <span className="icon is-small is-left">
                                <i className="fa fa-home"></i>
                            </span>
                        </div>
                        <p className="help p1-1 errorMessage">{address_HelpText}</p>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <label className="checkbox">
                            <input className="mr-2" type="checkbox" checked={is_TermsAndConditionsAccepted} />
                            I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                    <p className="help p1-1 errorMessage">{is_TermsAndConditionsAccepted}</p>
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