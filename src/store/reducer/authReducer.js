const initState =
{
    authError: null,
    // auth: JSON.parse(localStorage.yourObject)
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                 authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up Successful')
            return state
        
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up Error')
            return state
        
        case 'SIGNOUT_SUCCESS':
            console.log("Sign Out Success")
            return state
        default:
             return state
    }
}

export default authReducer