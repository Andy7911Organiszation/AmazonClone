import React from 'react';

import Nav from "./component/Nav";
import Inventory from "./component/MainInventory";
import Footer from './component/Footer';

// Pages
import Login_Page from './component-FullPage/Login_Page';


// React routing for 
import {BrowserRouter as Router,
        Switch,
        Link,
        Route
} from 'react-router-dom';

function App() {
  return (
     <Router>

        {/* Switch  */}
        <Switch>
          <Route path="/" exact>
            <Nav />
            <Inventory></Inventory>
            <Footer></Footer>
          </Route>
          <Route path="/Login" exact>
            <Login_Page />
          </Route>
        </Switch>
        
      </Router>
  );
}

export default App;
