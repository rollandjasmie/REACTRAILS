import React from 'react';
import AjoutHebergements from "./Components/pages/AjoutHebergements";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
              <ul>
                <li>
                  <Link to="/AjoutHebergements">Hebergement</Link>
                </li>
              </ul>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path='/AjoutHebergements'>
                    <AjoutHebergements/>
                </Route>
              </Switch>
          </div>
        </Router>
      </>);
  }

  
}
export default App;
