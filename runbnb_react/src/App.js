import React from 'react';
import AjoutHebergements from "./Components/pages/AjoutHebergements";
import Dashboard from "./Components/user/ShowUser"
import EditProfil from "./Components/user/EditProfil"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import HomePage from "./Components/forms/HomePage";
import SignIn from "./Components/forms/SignIn";
import Signup from "./Components/forms/Signup";
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    const { isAuthenticated} = this.props;
    return (
      <>
        <Router>
          <Switch>
            {isAuthenticated?(         
                <div className="bg-gray-100 h-screen">
                      <Route path='/AjoutHebergements'>
                          <AjoutHebergements/>
                      </Route>
                      
                      <Route exact path="/Dashboard" component={Dashboard} />
                      <Route exact path="/EditProfil" component={EditProfil} />

                      <Route exact path='/'>
                          <HomePage/>
                      </Route>
                </div>
              ) : 
                <>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/signup" component={Signup} />
                </>
            }
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToprops =(state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToprops)(App);
