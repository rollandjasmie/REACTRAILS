import React from 'react';
import AjoutHebergements from "./Components/pages/AjoutHebergements";
import Dashboard from "./Components/user/ShowUser"
import EditProfil from "./Components/user/EditProfil"
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
  
} from "react-router-dom";
import HomePage from "./Components/forms/HomePage";
import SignIn from "./Components/forms/SignIn";
import Signup from "./Components/forms/Signup";
import { connect } from 'react-redux';
import Details from './Components/forms/Details'
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Extraheb from './Components/forms/extranet/Extraheb';
import Modifierpiece from './Components/forms/extranet/pieces/Modifierpiece';


class App extends React.Component {
  render() {
    const { isAuthenticated} = this.props;
    return (
      <>
        <BrowserRouter>

          <Switch>
          <div className="bg-gray-100 h-screen overflow-x-hidden">

            {isAuthenticated?(  
              <>       
                      <Route exact path='/'  component={HomePage} />  
                      <Route path='/AjoutHebergements' component={AjoutHebergements} />  
                 
                      <Route exact path="/Dashboard" component={Dashboard} />
                  
                      <Route exact path="/EditProfil" component={EditProfil} />
                      <Route exact path="/details" component={Details} />
                      <Route exact path="/lnpm" component={NotFoundPage} />
                      <Route exact path="/extraheb" component={Extraheb} />
                </>
                
              ) : 
              <>
                  <Route exact path="/extraheb" component={Extraheb} />
                  <Route exact path='/' component={HomePage} />
                  <Route exact path="/details" component={Details}/>
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/l" component={NotFoundPage} />
                  <Route exact path="/modifierpiece" component={Modifierpiece} />
                 
                </>
                 
            }
             </div>
          </Switch>
          
        </BrowserRouter>
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
