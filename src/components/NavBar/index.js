import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'
import {connect} from 'react-redux'

class NavBar extends Component{
    constructor(props) {
        super(props)
        // this.state={links:""}
        // const {auth} = props 
        // this.element = React.createRef()
    }

    componentDidMount () {
        try {
            const list=document.getElementById('SignOut')
            list.addEventListener('click', this.SignOut);
        } catch (error) {
            
        }
    }

    SignOut(){
        // if (localStorage.yourObject!="null") {
        // // [START signout]
        // firebase.auth().signOut();
        // localStorage.yourObject = "null";
        // }
    }


    render(){
            const {auth} = this.props
            const links = auth.uid ? <SignOut/> : <SignIn/>
            return(
                <div className={`sticky top-0 z-10`}>
                <nav className={`bg-black text-white p-4 flex flex-row items-center`}>
                    <span className={`text-3xl w-24 mr-12`} style={{zIndex: 10}}>Weplay</span>
                    <div className={`flex flex-row justify-between w-full`}>
                    <ul className={`flex flex-row`}>
                        <li className={`mr-4`}><Link to="/">Home</Link></li>
                        <li className={`mr-4`}><Link to="/about">About</Link></li>
                        <li ><Link to="/p2p">p2p</Link></li>
                    </ul>
                    
                    {/* <SignOut/> */}
                    {links}
                    </div>
                </nav>
            </div>
            )   
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar)