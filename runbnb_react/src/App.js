import React from 'react';
import AjoutHebergements from "./Components/pages/AjoutHebergements";
import Dashboard from "./Components/user/ShowUser"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import HomePage from "./Components/forms/HomePage";
import SignIn from "./Components/forms/SignIn";
import Signup from "./Components/forms/Signup";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
         
          <div className="bg-gray-100 h-screen">
            
            
              <Switch>
                <Route path='/AjoutHebergements'>
                    <AjoutHebergements/>
                </Route>
                
                <Route exact path="/Dashboard" component={Dashboard} />

                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
          </div>

        </Router>
      </>);
  }

  
}
export default App;
