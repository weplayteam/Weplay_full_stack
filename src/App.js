import React, { Component } from 'react'
import {
  Route,
  Switch
} from "react-router-dom";

import {connect} from 'react-redux'

import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import P2PPage from './pages/P2PPage';
import Navbar from './components/NavBar';
import UserProfile  from './pages/profilePage';

class App extends Component {
  
  constructor(props) {
    super(props)
    //this.state = {num: 0}
    this.element = React.createRef()
  }

  render(){
    const {auth} = this.props
    return (
      <div className="font-sans bg-gray-100 min-h-screen">
        {/* <Helmet>
          <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
          <div id="nav-placeholder"></div>
          <script>$(function(){$("#nav-placeholder").load("/html/nav.html")});</script>
        </Helmet>  */}

        <Navbar style={{zIndex:"2"}}/>
        
        {/* <div className={`container mx-auto`}> */}
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignupPage />
            </Route>
            <Route exact path="/p2p">
              <P2PPage />
            </Route>
            <Route 
              exact path="/userprofile" 
              render = {()=>(
                auth.uid?<UserProfile/>:<LoginPage/>
              )}
            />
          </Switch>
        {/* </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);

//export default App
