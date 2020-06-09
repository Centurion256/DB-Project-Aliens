import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import human_hi from "../../images/human_hi.jpg";
import "../../styles/human_home.css"


const HumanHome = ()=>{
    return(
        <div className="human_home_page_container">
            <NavigationBar/>
            <HumanHi/>
        </div>
    )
};
export default HumanHome;


class NavigationBar extends Component {
    render() {
        return (
            <div className="human_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                        <li><Link to="/request_human">Request results</Link></li>
                        <li><Link to="/show_human">Show tables</Link></li>
                        <li><Link to="/actions_human">Actions</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class HumanHi extends Component {
    render() {
        return (
            <div className="human_photo">
                <img
                    src={human_hi}
                    className="human_hi"
                    alt=""
                />
                <div className="human_hi_text">
                    <h1 className="human_hi_text_header">Hi, Human...</h1>
                </div>
            </div>
        )
    }
}