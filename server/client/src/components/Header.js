import React, {Component} from 'react';


class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper indigo">
                <a href="tupu.html" className="left brand-logo">Emaily</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Login with google</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Header;