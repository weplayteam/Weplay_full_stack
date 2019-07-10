import React from 'react'
import{Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignOut = (props) =>{

    return(
        <ul className={`flex flex-row`}>
            <li className={`mr-4`}> <Link to='/login'>Profile</Link> </li>
            <li id={'SignOut'}> <Link to='/' onClick={props.signOut}>Sign Out</Link></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: () => dispatch(signOut)
    }
}
export default connect(null, mapDispatchToProps)(SignOut)