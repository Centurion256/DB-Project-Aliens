import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_request.css"


const HumanRequest = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <HumanRequestChoose/>
        </div>
    )
};
export default HumanRequest;


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


class HumanRequestChoose extends Component {
    render() {
        return (
            <div className="admin_choose_request">
                <h1 className="admin_request_text">Human please choose request: </h1>
                <div className="admin_request_buttons">
                    <Link to="/request_q2">
                        <Button class="button" renderAs="button">
                            For human H find all the ships he/she has visited during the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q3">
                        <Button class="button" renderAs="button">
                            For human H, find all aliens who abducted him/her at least N times during the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q4">
                        <Button class="button" renderAs="button">
                            For human H, find all the aliens he/she killed during the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q5">
                        <Button class="button" renderAs="button">
                            For human H to find all the aliens who kidnapped him/her and were killed.;
                        </Button>
                    </Link>
                    <Link to="/request_q8">
                        <Button class="button" renderAs="button">
                            Find all joint excursions and experiments for alien A and person H for the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q10">
                        <Button class="button" renderAs="button">
                            For human H and each experiment in which he/she participated, find how many times during
                            the specified period (from date F to date T) the experiment was performed on him/her by at least N aliens;
                        </Button>
                    </Link>
                    <Link to="/request_q11">
                        <Button class="button" renderAs="button">
                            Find the total number of abductions by months
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}