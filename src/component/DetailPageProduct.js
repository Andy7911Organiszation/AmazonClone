import React, { Component } from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCartPlus,faLock,faMapMarker } from '@fortawesome/free-solid-svg-icons'


export default class DetailPageProduct extends Component {
     state={
                file:'http://placehold.it/500x500'
            }  
            
            overImage = (event) =>{

         const image= event.target.src;
         this.setState({file:image});

        }
            render() {

          
        
        return (
            <div className='container-fluid'>
                <Nav></Nav>
                <div className ='columns'>
                    <div className='column is-1 '>
                        <img src="https://i.ibb.co/L5Lp1Tx/aspirateur.png" className='is-hovered' style={{width:100,height:100, border:''}} alt='imagefacade' onMouseOver={event=>this.overImage(event)} ></img> 
                 
                    </div>
                    <div className='column is-1'>
                        <img src="https://i.ibb.co/hWcs30T/robot-Culinaire.png"  style={{width:100,height:100}} alt='imagefacade' onMouseOver={event=>this.overImage(event)}></img> 
                    </div>
                    <div className='column is-1' >
                 
                        <img src="https://i.ibb.co/92GYz9h/bbq.png" style={{width:100,height:100}} alt='imagefacade' onMouseOver={event=>this.overImage(event)}></img>
                    </div>
             

                </div>
                <div className='columns is-5'>
                    <div className='column'>
                        <img src={this.state.file} style={{width:'400px',height:'400px'}}> 

                        </img>
                    </div>
                    <div className='column is-5'>
                        <h1 className='title is-3'>BBq Grill</h1>
                        <hr></hr>
                        <p>
                            They are present from the beginning of the development of the cell-wail, and arise from the spindle 
                            fibres, all of which may be continued as connecting threads (endosperm of Tamus communis), or part of 
                            them may be overlaid by cellulose lamellae (endosperm of Lilium Martagon),
                            or they may be all overlaid as in pollen mother-cells and pollen grains of Helleborus foetidus.
                        </p>

                    </div>
                    <div className='column is-2'>
                        <div className='box'>
                        <div className='columns is-desktop is-vcentered'>
                        <div className='column is-12 p-4'>
                        
                            <div className='card has-text-centered is-wide' >
                             <div className=''>
                              <p>1800$ et livraison gratruite</p> 
                              <p>Seulement 10 en stock</p> 
                              Quantité:
                                    <div class="select is-small">
                                        <select>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                  
                                   <button className='button gold is-small is-fullwidth'><FontAwesomeIcon icon={faCartPlus}/> Ajouter au Panier</button>
                                   <button className='button gold is-small is-fullwidth'><FontAwesomeIcon icon={faPlay}/>Acheter Maintenant</button>
                                   <p><FontAwesomeIcon icon={faLock}/>Trasaction sécuritaire </p>
                                   <hr className='black'/>
                                   <p> <FontAwesomeIcon icon={faMapMarker}/> Livre a Beaudois Montreal Qc </p>
                                   <button className='buttton is-light is-small'>Ajouter a la liste d'envie</button>
                            </div>

                            </div>
                            <div>

                            </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
                <Footer></Footer>

        </div>
        )
    }
}
