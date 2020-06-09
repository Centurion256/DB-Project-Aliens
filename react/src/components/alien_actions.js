import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_request.css"


const AlienActions = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <AlienActionsChoose/>
        </div>
    )
};
export default AlienActions;


class NavigationBar extends Component {
    render() {
        return (
            <div className="admin_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                        <li><Link to="/request_alien">Request results</Link></li>
                        <li><Link to="/show_alien">Show tables</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class AlienActionsChoose extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="admin_request_text">Alien please choose action: </h1>
                <div className="admin_request_buttons">
                    <Link to="/alien_host_excursion">
                        <Button class="button" renderAs="button">
                            Host excursion
                        </Button>
                    </Link>
                    <Link to="/alien_abduct_human">
                        <Button class="button" renderAs="button">
                            Abduct human
                        </Button>
                    </Link>
                    <Link to="/alien_conduct_experiment">
                        <Button class="button" renderAs="button">
                            Conduct experiment
                        </Button>
                    </Link>
                    <Link to="/alien_transport_human">
                        <Button class="button" renderAs="button">
                            Transport human
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}