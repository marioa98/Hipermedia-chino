import React, {Component} from 'react';
import {connect} from 'react-redux';


class Header extends Component{

    renderContent(){
        console.log(this.props)
        switch(this.props.auth){

            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }

    render(){
        console.log(this.props)
        return(
            <nav>
                <div className="nav-wrapper" style={{backgroundColor: '#78A94D'}}>
                <a href="tupu.html" className="left brand-logo" >
                    Emaily
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}

//== mapStateToProps(state.auth)
function mapStateToProps({auth}){
    return{auth} //Key value pair con el mismo valor, == {auth: state.auth}
}

export default connect(mapStateToProps)(Header);