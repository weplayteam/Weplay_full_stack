import React from 'react'
import{Link} from 'react-router-dom'

const SignIn = () =>{

    return(
        <ul className={`flex flex-row`}>
            <li className={`mr-4`}> <Link to='/login'>Login</Link> </li>
            <li id={'SignOut'}> <Link to='/signup'>Sign Up</Link> </li>
        </ul>
    )
}

export default SignIn