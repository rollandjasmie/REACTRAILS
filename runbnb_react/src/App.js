import React from 'react';
import AjoutHebergements from "./Components/pages/AjoutHebergements";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Components/forms/HomePage";
import SignIn from "./Components/forms/SignIn";
import Signup from "./Components/forms/Signup";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
         
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path='/AjoutHebeherrgements'>
                    <AjoutHebergements/>
                </Route>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
        
        </Router>
      </>);
  }

  
}
export default App;
