import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_fill.css"


const HumanShow = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <HumanShowResults/>
        </div>
    )
};
export default HumanShow;


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


class HumanShowResults extends Component {
    render() {
        return (
            <div className="admin_fill_choose_tables">
                <h1 className="admin_fill_text">Human please choose table to show its content: </h1>
                <div className="admin_fill_buttons">
                    <Link to="/showing_excursion_table">
                        <Button class="button" renderAs="button">
                            Excursion
                        </Button>
                    </Link>
                    <Link to="/showing_human_table">
                        <Button class="button" renderAs="button">
                            Human
                        </Button>
                    </Link>
                    <Link to="/showing_redemption_table">
                        <Button class="button" renderAs="button">
                            Redemption
                        </Button>
                    </Link>
                    <Link to="/showing_murder_table">
                        <Button class="button" renderAs="button">
                            Murder
                        </Button>
                    </Link>
                    <Link to="/showing_abduction_table">
                        <Button class="button" renderAs="button">
                            Abduction
                        </Button>
                    </Link>
                    <Link to="/showing_conviction_log_table">
                        <Button class="button" renderAs="button">
                            Conviction_Log
                        </Button>
                    </Link>
                    <Link to="/showing_excursion_human_table">
                        <Button class="button" renderAs="button">
                            Excursion_Human
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}