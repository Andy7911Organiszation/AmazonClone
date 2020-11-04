import React, { Component } from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faCartPlus,faLock,faMapMarker } from '@fortawesome/free-solid-svg-icons'


export default class DetailPageProduct extends Component {
     state={
                file:'http://placehold.it/500x500',
                stock:'En Stock'
            }  
            
            overImage = (event) =>{

         const image= event.target.src;
         this.setState({file:image});

        }
            render() {

          
        
        return (
            <div className='container-fluid'>
                <Nav></Nav>
                <div className='container'>
                    <div className ='columns'>
                        <div className='column is-1 '>
                            <img src="https://i.ibb.co/L5Lp1Tx/aspirateur.png" className='is-gray-border' style={{width:100,height:100, }} alt='imagefacade' onMouseOver={event=>this.overImage(event)} ></img> 
                    
                        </div>
                        <div className='column is-1'>
                            <img src="https://i.ibb.co/hWcs30T/robot-Culinaire.png" className='is-gray-border'  style={{width:100,height:100}} alt='imagefacade' onMouseOver={event=>this.overImage(event)}></img> 
                        </div>
                        <div className='column is-1' >
                    
                            <img src="https://i.ibb.co/92GYz9h/bbq.png"  className='is-gray-border' style={{width:100,height:100}} alt='imagefacade' onMouseOver={event=>this.overImage(event)}></img>
                        </div>
                
    
                    </div>
                    <div className='columns'>
                        <div className='column is-4'>
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
                      
                            <div >
                           
                            <div className='column is-8 p-4 '>
                            
                                <div className='card has-text-centered is-wide' >
                                <div className=''>
                                <p className='has-text-weight-semibold pb-6'>Souhaitez-vous protéger votre achat? Vérifiez que cette assurance couvre vos besoins:</p>
                                <p >1800$ et livraison gratruite</p> 
                                <p className="pb-4">Seulement 10 en stock</p> 
                                <p className='has-text-primary'>{this.state.stock}</p>
                                Quantité:
                                        <div class="select is-small">
                                            <select>
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                    
                                    <button className='button gold is-normal is-outlined mb-2 mt-4' style={{width:'80%'}}><FontAwesomeIcon transform="grow-7 left-30.5 up-2.2" icon={faCartPlus}/> Ajouter au Panier</button>
                                    <button className='button gold is-normal is-fullwidth pl-3' ><FontAwesomeIcon  icon={faPlay}/>Acheter Maintenant</button>
                                    <p><FontAwesomeIcon  icon={faLock}/> &nbsp; Trasaction sécuritaire </p>
                                    <hr className='black'/>
                                    <p> <FontAwesomeIcon icon={faMapMarker}/> &nbsp; Livre a Beaudois Montreal Qc </p>
                                    <button className='buttton is-light is-small'> Ajouter a la liste d'envie</button>
                                </div>

                                </div>

                            
                                <div>

                                </div>

                                    <div className='card'>
                                    <div className='card-header-title is-centered'>
                                        <p >Autre Vendeur sur Amazon </p>
                                    </div>
                                    <hr className='black'></hr>
                                    <div className='card-content'>
                                        <div className='has-text-right'>
                                            <h2>35,77$</h2> <button className='button gold is-small' >Ajouter au panier</button>
                                        </div>
                                    </div>
                                </div>

                                </div>
                             
                            

                            </div>
                            </div>
                            {/*ending Block*/}
                            <div className='pt-4'> 
                          

                     
                        <div className='column'></div>

                        

                    </div>
                <Footer></Footer>
                </div>
            </div>
        )
    }
}
