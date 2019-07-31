import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Link} from 'react-router-dom'
// import * as firebase from 'firebase/app';

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCUW5-DvZrZLS_l3Xo5D3tsylSyx7iECVU",
//     authDomain: "weplaywebsite-df154.firebaseapp.com",
//     databaseURL: "https://weplaywebsite-df154.firebaseio.com",
//     projectId: "weplaywebsite-df154",
//     storageBucket: "weplaywebsite-df154.appspot.com",
//     messagingSenderId: "438050842700",
//     appId: "1:438050842700:web:c68fa340ce8435d5"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

class LoginPage extends Component {

    constructor(props) {
        super(props)
        //this.state = {num: 0}
        this.element = React.createRef()
    }

    componentDidMount () {
      this.element.current.addEventListener('click', this);

    }

//     toggleSignIn(email, password) {
//         if (email.length < 4) {
//           alert('Please enter an email address.');
//           return;
//         }
//         if (password.length < 4) {
//           alert('Please enter a password.');
//           return;
//         }
//         // Sign in with email and pass.
//         firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           if (errorCode === 'auth/wrong-password') {
//             alert('Wrong password.');
//             return;
//           } else {
//             alert(errorMessage);
//             return;
//           }
//           console.log(error);
//         });
// }

    initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      // firebase.auth().onAuthStateChanged(function(user) {
      //   // [START_EXCLUDE silent]
      //   //document.getElementById('quickstart-verify-email').disabled = true;
      //   // [END_EXCLUDE]
      //   if (user) {
      //     // User is signed in.
      //     var displayName = user.displayName;
      //     var email = user.email;
      //     var emailVerified = user.emailVerified;
      //     var photoURL = user.photoURL;
      //     var isAnonymous = user.isAnonymous;
      //     var uid = user.uid;
      //     var providerData = user.providerData;

      //     //console.log(user)

      //     // if (localStorage.yourObject=="null") {
      //     localStorage.yourObject = JSON.stringify(user, null, ' ');
      //     //window.location.href="/html/profile.html";
      //       // }
      //   }
      // });
      // [END authstatelistener]
    }

    render() {
        // this.initApp();
        const {authError} = this.props
        return (
            <div className={`mt-24`}>
                {/* <Helmet>
                    <script src="http://192.168.0.99:8097"></script>
                </Helmet> */}
                <div className={`flex flex-row justify-center`}>
                    <div ref={this.element} className={`p-12 bg-white rounded shadow-lg rounded`}>
                        <label className={`my-6`}>{"Username or e-mail"}</label>
                        <br />
                        <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`username/email`} id={`email`} type="text"></input>
                        <br />
                        <label className={`my-6`}>{"Password"}</label>
                        <br />
                        <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`password`} id={`password`} type="password"></input>
                        <br />
                        <Link to="../userprofile"><button type="submit" className={`btn btn-indigo w-full`} id={`quickstart-sign-in`} >login</button></Link>
                        <div className="red-text center">
                          {authError? <p>{authError}</p>: null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleEvent(e){
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      // console.log(password);
      // console.log(email);
      // e.target.id === 'quickstart-sign-in' && this.toggleSignIn(email, password)
      e.target.id === 'quickstart-sign-in' && this.props.signIn({email: email, password: password})
    }
}

const mapStateToProps = (state)=> {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
