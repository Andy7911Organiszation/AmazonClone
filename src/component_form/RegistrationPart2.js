import React from 'react';

export default function RegistrationPart2 () {
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
            </div>
    )

}