import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import "../styles/admin_request.css"


const AdminRequest = ()=>{
    return(
        <div className="alien_home_page_container">
            <NavigationBar/>
            <AdminRequestChoose/>
        </div>
    )
};
export default AdminRequest;


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


class AdminRequestChoose extends Component {
    render() {
        return (
            <div className="admin_choose_request">
                <h1 className="admin_request_text">Admin please choose request: </h1>
                <div className="admin_request_buttons">
                    <Link to="/request_q1">
                        <Button class="button" renderAs="button">
                            For alien A find all people it abducted at least N times during the specified period (from date F to date T);
                        </Button>
                    </Link>
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
                    <Link to="/request_q6">
                        <Button class="button" renderAs="button">
                            Find all aliens who abducted at least N different people during the specified period (from the date
                            F by date T);
                        </Button>
                    </Link>
                    <Link to="/request_q7">
                        <Button class="button" renderAs="button">
                            Find all people who have been abducted at least N times during the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q8">
                        <Button class="button" renderAs="button">
                            Find all joint excursions and experiments for alien A and person H for the specified period (from date F to date T);
                        </Button>
                    </Link>
                    <Link to="/request_q9">
                        <Button class="button" renderAs="button">
                            For alien A and each excursion he conducted, find how many times during the specified
                            period (from date F to date T) he conducted an excursion for at least N people;
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
                    <Link to="/request_q12">
                        <Button class="button" renderAs="button">
                            Find ships in descending order of the total number of experiments that were conducted on
                            ship with the participation of this alien A during the specified period (from date F to date T);
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}