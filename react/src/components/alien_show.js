import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_fill.css"


const AlienShow = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <AlienShowResults/>
        </div>
    )
};
export default AlienShow;


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


class AlienShowResults extends Component {
    render() {
        return (
            <div className="admin_fill_choose_tables">
                {/*<h1 className="admin_fill_text">Filling tables with data</h1>*/}
                <h1 className="admin_fill_text">Admin please choose table to show its content: </h1>
                <div className="admin_fill_buttons">
                    <Link to="/showing_alien_table">
                        <Button class="button" renderAs="button">
                            Alien
                        </Button>
                    </Link>
                    <Link to="/showing_spaceship_table">
                        <Button class="button" renderAs="button">
                            Spaceship
                        </Button>
                    </Link>
                    <Link to="/showing_excursion_table">
                        <Button class="button" renderAs="button">
                            Excursion
                        </Button>
                    </Link>
                    <Link to="/showing_experiment_table">
                        <Button class="button" renderAs="button">
                            Experiment
                        </Button>
                    </Link>
                    <Link to="/showing_transportation_table">
                        <Button class="button" renderAs="button">
                            Transportation
                        </Button>
                    </Link>
                    <Link to="/showing_redemption_table">
                        <Button class="button" renderAs="button">
                            Redemption
                        </Button>
                    </Link>
                    <Link to="/showing_abduction_table">
                        <Button class="button" renderAs="button">
                            Abduction
                        </Button>
                    </Link>
                    <Link to="/showing_experiment_alien_table">
                        <Button class="button" renderAs="button">
                            Experiment_Alien
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}