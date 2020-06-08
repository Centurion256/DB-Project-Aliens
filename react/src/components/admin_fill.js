import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_fill.css"


const AdminFill = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <AdminFillChoose/>
        </div>
    )
};
export default AdminFill;


class NavigationBar extends Component {
    render() {
        return (
            <div className="admin_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                        <li><Link to="/filling_admin">Fill tables</Link></li>
                        <li><Link to="/request_admin">Request results</Link></li>
                        <li><Link to="/show_admin">Show tables</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class AdminFillChoose extends Component {
    render() {
        return (
            <div className="admin_fill_choose_tables">
                {/*<h1 className="admin_fill_text">Filling tables with data</h1>*/}
                <h1 className="admin_fill_text">Admin please choose table to fill: </h1>
                <div className="admin_fill_buttons">
                    <Link to="/filling_alien_table">
                        <Button class="button" renderAs="button">
                            Alien
                        </Button>
                    </Link>
                    <Link to="/filling_spaceship_table">
                        <Button class="button" renderAs="button">
                            Spaceship
                        </Button>
                    </Link>
                    <Link to="/filling_excursion_table">
                        <Button class="button" renderAs="button">
                            Excursion
                        </Button>
                    </Link>
                    <Link to="/filling_human_table">
                        <Button class="button" renderAs="button">
                            Human
                        </Button>
                    </Link>
                    <Link to="/filling_experiment_table">
                        <Button class="button" renderAs="button">
                            Experiment
                        </Button>
                    </Link>
                    <Link to="/filling_transportation_table">
                        <Button class="button" renderAs="button">
                            Transportation
                        </Button>
                    </Link>
                    <Link to="/filling_redemption_table">
                        <Button class="button" renderAs="button">
                            Redemption
                        </Button>
                    </Link>
                    <Link to="/filling_murder_table">
                        <Button class="button" renderAs="button">
                            Murder
                        </Button>
                    </Link>
                    <Link to="/filling_abduction_table">
                        <Button class="button" renderAs="button">
                            Abduction
                        </Button>
                    </Link>
                    <Link to="/filling_conviction_log_table">
                        <Button class="button" renderAs="button">
                            Conviction_Log
                        </Button>
                    </Link>
                    <Link to="/filling_experiment_alien_table">
                        <Button class="button" renderAs="button">
                            Experiment_Alien
                        </Button>
                    </Link>
                    <Link to="/filling_excursion_human_table">
                        <Button class="button" renderAs="button">
                            Excursion_Human
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}