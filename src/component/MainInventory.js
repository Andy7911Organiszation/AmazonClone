import React, { Component } from 'react'
import axios from 'axios';

export class MainInventory extends Component {
    state={arrayProduct:[]}
        componentDidMount(){

            axios.get('http://127.0.0.1:8000/api/Product').then(resp=>{

            console.log(resp.data);
            this.setState({arrayProduct:resp.data})
            });
        }  


        render() {
               
                    const listproduct = this.state.arrayProduct.map(product=>{return<div key={product.id}  className="column is-one-quarter"><img src={product.source}  ></img><a  className='button is-small is-fullwidth' >Aperçus </a></div>});
        
        return (
            <div >
                <div className="columns is-multiline is-mobile">
                  {listproduct}
                  
                </div>

               
                
            </div>
        )
    }
}

export default MainInventory
