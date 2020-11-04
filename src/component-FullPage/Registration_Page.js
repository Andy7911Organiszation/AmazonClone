import React, {useRef, useState} from 'react';

import RegistrationPart1 from '../component_form/RegistrationPart1';
import RegistrationPart2 from '../component_form/RegistrationPart2';

// This page is render without a header
export default function Registration_Page () {

    const [is_firstFormSectionVisible, set_isFirstFormSectionVisible] = useState(true);
    const [is_secondFormSectionVisible, set_isSecondFormSectionVisible] = useState(false);

    const [registerFormPart1, set_registerFormPart1] = useState();
    const [registerFormPart2, set_registerFormPart2]= useState();

    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [emailAdress,setEmailAdress] = useState();
    const [birthday,setBirthDay] = useState();
    
    const REGEX_NAME = /[a-zA-Z]{2,30}/;
    const REGEX_EMAIL = /[a-zA-Z]{4,}[@]{1}[a-z]{1,20}[.]{1}[a-z][2,10]/
    const REGEX_PASSWORD = null;
    function changeRegisterFormToSecondPage () {
        // Entry is validate by the RegisterFormPart1
        //console.log(registerFormPart1);
        //console.log(registerFormPart1.current);
        
        // Make the RegisterPart1 Invisible
        registerFormPart1.current.style.display = 'none';
        // Make the RegisterPart2 Visible
        registerFormPart2.current.style.display = 'block';
    }

    function changeRegisterFormToFirstPage() {
        // Make the RegisterPart2 Invisible 
        registerFormPart2.current.style.display = 'none';
        // Make the RegisterPart1 Visible
        registerFormPart1.current.style.display = 'block';
    }

    


    
    

    return (
        <section id="form-section">
            
        <form className="column is-6 is-offset-3 px-0 pt-0 pb-5">
            <div className="field pb-5">
                <h1 id="h1" className="title is-3 has-background-primary is-large c-center">Register</h1>
            </div>
            
            <RegistrationPart1 
                changeToSecondForm={changeRegisterFormToSecondPage}
                passChildData={set_registerFormPart1}
                
            /> 
                       
            <RegistrationPart2 
                changeToFirstForm= {changeRegisterFormToFirstPage}
                passChildData={set_registerFormPart2}
                onSubmitSecondForm= {() => null} 
            />
                      
            
        </form>
                    
    </section>
    );
}