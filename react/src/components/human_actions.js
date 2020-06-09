import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_request.css"


const HumanActions = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <HumanActionsChoose/>
        </div>
    )
};
export default HumanActions;


class NavigationBar extends Component {
    render() {
        return (
            <div className="admin_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                        <li><Link to="/request_human">Request results</Link></li>
                        <li><Link to="/show_human">Show tables</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class HumanActionsChoose extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="admin_request_text">Human please choose action: </h1>
                <div className="admin_request_buttons">
                    <Link to="/human_escape_spaceship">
                        <Button class="button" renderAs="button">
                            Escape spaceship
                        </Button>
                    </Link>
                    <Link to="/human_kill_alien">
                        <Button class="button" renderAs="button">
                            Kill alien
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}