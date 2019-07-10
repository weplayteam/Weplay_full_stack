

export const signIn = (credentials) =>  {
    return (dispatch, getState, {getFirebase}) => {
        //make async call to database
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR'}, err)
        });
        
    }
};

export const signUp = (credentials) =>  {
    return (dispatch, getState, {getFirebase}) => {
        //make async call to database
        // var con = mysql.createConnection({
        //     host: "weplay.org",
        //     user: "cdomkam",
        //     password: "weplay",
        //     database: "weplay_db"
        // });
        
        // var sql = "INTO user (email, password) VALUES ('"+credentials.email + "' ,'" + credentials.password + "')";
        // console.log(sql);

        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
            // firebase.auth().currentUser.sendEmailVerification().then(function() {
            //     alert('Email Verification Sent!');
            //   });
        }).catch((err)=>{
            dispatch({type: 'SIGNUP_ERROR'}, err)
        });
        
    }
};

export const signOut = (dispatch, state, {getFirebase}) => {

    const firebase = getFirebase()
    firebase.auth().signOut().then(() => {
        dispatch({type: 'SIGNOUT_SUCCESS'});
    })
}