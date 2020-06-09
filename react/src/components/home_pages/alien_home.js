import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import "../../styles/alien_home.css"
import alien_hi from "../../images/alien_hi.jpg"


const AlienHome = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <AlienHi/>
        </div>
    )
};
export default AlienHome;


class NavigationBar extends Component {
    render() {
        return (
            <div className="alien_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                        <li><Link to="/request_alien">Request results</Link></li>
                        <li><Link to="/show_alien">Show tables</Link></li>
                        <li><Link to="/actions_alien">Actions</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class AlienHi extends Component {
    render() {
        return (
            <div className="alien_photo">
                <img
                    src={alien_hi}
                    className="alien_hi"
                    alt=""
                />
                <div className="alien_hi_text">
                    <h1 className="alien_hi_text_header">Hi, Alien...</h1>
                </div>
            </div>
        )
    }
}