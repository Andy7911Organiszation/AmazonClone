import React, {useState} from 'react';

import { FontAwesome } from '@fortawesome/fontawesome-free';
import { Link } from 'react-router-dom';

import RegistrationPart1 from '../component_form/RegistrationPart1';
import RegistrationPart2 from '../component_form/RegistrationPart2';

// This page is render without a header
export default function Registration_Page () {

    const [is_nextButtonClicked,set_isNextButtonClicked] = useState(false);
    const [is_previousButtonClicked,set_isPreviousButtonClicked] = useState(false);
    const [is_firstFormSectionVisible, set_isFirstFormSectionVisible] = useState(true);
    const [is_secondFormSectionVisibble, set_isSecondFormSectionVisible] = useState(false);



    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();

    function changeRegisterFormToSecondPage () {
        //
        set_isFirstFormSectionVisible(false);
        set_isSecondFormSectionVisible(true);
        console.log("Change form to first Page");
    }

    function changeRegisterFormToFirstPage() {
        set_isFirstFormSectionVisible(true);
        set_isSecondFormSectionVisible(false);
        console.log("Changing form to first page")
    }

    function validateFormFirstSection() {
        
    }


    
    

    return (
        <section id="form-section">
            
        <form  className="column is-6 is-offset-3 px-0 pt-0 pb-5">
            <div className="field pb-5">
                <h1 className="title is-3 has-background-primary is-large c-center">Register</h1>
            </div>
            {/* Setting which form section is visible 
                Ternany Operator 
                const componentToRender =  (is_firstFormSectionVisiblle) ? <RegistrationPart1 /> : null
             */}
            {
                is_firstFormSectionVisible ?  <RegistrationPart1 changeToSecondForm={changeRegisterFormToSecondPage} /> : null
            }
            {
                is_secondFormSectionVisibble? <RegistrationPart2 changeToFirstForm= {() => changeRegisterFormToSecondPage}/> : null
            }
        </form>
                    
    </section>
    );
}