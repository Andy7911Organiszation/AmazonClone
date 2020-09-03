import React from 'react';

export default function RegistrationPart2 (props) {
    return (
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
                <div id="buttons" className="field has-addons pt-4 columns">
                    <p className="control column" onClick={props.changeToFirstForm}>
                        <a className="button is-ligth is-fullwidth">
                            Return
                        </a>    
                    </p>
                    <p id="btn_next" className="control column">
                        <a className="button is-primary has-icons-right is-fullwidth">
                            Submit
                        </a>
                    </p>
                </div>
            </div>
    )

}