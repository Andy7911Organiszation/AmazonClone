import React from 'react';

import Nav from "./component/Nav";
import Inventory from "./component/MainInventory";
import Footer from './component/Footer';

function App() {
  return (
    <div>
     <div>
        <Nav></Nav>
        <Inventory></Inventory>
        <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
