import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer" style={{ marginTop: 100 }}>
                    
                    <div className="content has-text-centered">
                        <div className="columns is-multiline">

                            <div className="column is-one-quarter">
                                <p>
                                    <h3>Get to Know Us</h3> <br></br>
                                    <a>Careers</a> <br></br>
                                    <a>Amazon</a>
                                </p>
                            </div>
                            <div className="column is-one-quarter">
                                <p>
                                    <h3>Make Money with Us</h3> <br></br>
                                    <a>Careers</a> <br></br>
                                    <a>Amazon</a>
                                </p>
                            </div>
                            <div className="column is-one-quarter">
                                <p>
                                    <h3>Amazon Payment Products</h3> <br></br>
                                    <a>Careers</a> <br></br>
                                    <a>Amazon</a>
                                </p>
                            </div>
                            <div className="column is-one-quarter">
                                <p>
                                    <h3>Let Us Help You</h3> <br></br>
                                    <a>COVID-19 and Amazon</a> <br></br>
                                    <a>Shipping Rates & Policies</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
