import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
// import * as firebase from 'firebase/app'

// var mysql = require('mysql');

////////////////////////////////////////////////////////////////////////////////////////
//SET UP CONNECTION TO DATABASE
////////////////////////////////////////////////////////////////////////////////////////
// var con = mysql.createConnection({
//   host: "weplay.org",
//   user: "cdomkam",
//   password: "weplay",
//   database: "weplay_db"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected! to weplay db");
// });

class SignupPage extends Component {
    
    constructor(props) {
        super(props)
        this.element = React.createRef()

        // this.con = mysql.createConnection({
        //     host: "weplay.org",
        //     user: "cdomkam",
        //     password: "weplay",
        //     database: "weplay_db"
        // });

        // this.state = {email: "", password: ""}

    }

     componentDidMount () {
      //if(this.state)
      //}
    }

    // sendEmailVerification() {
        // firebase.auth().currentUser.sendEmailVerification().then(function() {
        //   alert('Email Verification Sent!');
        // });
      // }
    
    render() {
        
        return (
            <div className={`mt-24`}>
                <div className={`flex flex-row justify-center`}>
                    <form action = "/signup" method="post" className={`p-12 bg-white rounded shadow-lg rounded`} onSubmit={this.handleSubmit()}>
                    {/* <div className={`p-12 bg-white rounded shadow-lg rounded`} > */}
                        <label>{"Username/e-mail: "}</label>
                        <br />
                        <input placeholder={`username/e-mail`} className={`w-64 my-6 bg-gray-100 p-4`} id={`email`} type="text" name={`email`}></input>
                        <br />
                        <label>{"Password: "}</label>
                        <br />
                        <input placeholder={`password`} className={`w-64 my-6 bg-gray-100 p-4`} id={`password`} type="password" name={`password`}></input>
                        <br/>
                        <label>{"Confirm Password: "}</label>
                        <br/>
                        <input placeholder={`confirm password`} className={`w-64 my-6 bg-gray-100 p-4`} id={`conf_password`} name={`conf_password`} type="password"></input>
                        <br />
                        <button type="submit" className={`btn btn-indigo w-full`} id={`signUp`}>Signup</button>
                    {/* </div> */}
                    </form>
                </div>
            </div>
        )
    }
    handleSubmit(){
      // e.preventDefault()
      console.log("pressed submit")
    }

    handleSignUp = (e) => {
      console.log("pressed submit")

      // e.preventDefault();
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      // this.props.signUp({email: email, password: password})

    //   fetch('/signup', {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({email: email, password: password})
    //     }).then(function(response){
    //         console.log(response.status)
    //         if(response.status >=400){
    //             throw new Error("Bad response from server")
    //         }
    //         return response.json();
    //     })
    }

}

// const mapStateToProps = (state)=> {
//   return state
// }

const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (creds) => dispatch(signUp(creds))
  }
}

// export default SignupPage
export default connect(null, mapDispatchToProps)(SignupPage)
