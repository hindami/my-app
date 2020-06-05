import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
import NonTesting from './NonTesting';
import Testing from './Testing';
import Navigation from './Navigation.jsx';

function App() {
    return (
      <Router>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={home} exact/>
              <Route path="/nontesting" component={NonTesting} />
              <Route path="/testing" component={Testing} />
            </Switch>
          </div>
      </Router>
    );
}

const home = () => {
  return (<div></div>);
}


export default App;