import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import "../styles/request_results.css"
import {Button} from "react-bootstrap";
import axios from 'axios';


export class Q1Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q1/></div>)
    }
}

export class Q2Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q2/></div>)
    }
}

export class Q3Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q3/></div>)
    }
}

export class Q4Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q4/></div>)
    }
}

export class Q5Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q5/></div>)
    }
}

export class Q6Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q6/></div>)
    }
}

export class Q7Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q7/></div>)
    }
}

export class Q8Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q8/></div>)
    }
}

export class Q9Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q9/></div>)
    }
}

export class Q10Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q10/></div>)
    }
}

export class Q11Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q11/></div>)
    }
}

export class Q12Request extends Component {
    render() {
        return(
            <div><NavigationBar/><Q12/></div>)
    }
}


class NavigationBar extends Component {
    render() {
        return (
            <div className="admin_navbar">
                <nav className="nav-wrapper">
                    <ul className="right">
                        <li><Link to="/">Back to Login</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


class Q1 extends Component {

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        let data = new FormData(event.target);
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/q1',
            params: {
                "alien_name": data.get("alien_name"),
                "count": data.get("count"),
                "start_date": data.get("start_date"),
                "end_date": data.get("end_date")
            }})
            .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }

    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (alien A) find all people it abducted at least (N) times during the specified period (from date F to date T)</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        Alien Name:
                        <input type="text" name="alien_name" className="request_input"/>
                    </label>
                    <label className="request_label">
                        Number of times:
                        <input type="text" name="count" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start"
                               name="start_date"
                               defaultValue="2018-07-22"/>
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start"
                               name="end_date"
                               defaultValue="2018-07-22"/>
                    </label>
                    <input type="submit" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q2 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (human H) find all the ships he/she has visited during the specified period (from date F to date T)</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        HumanID:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q3 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (human H), find all aliens who abducted him/her at least (N times) during the specified period (from date F to date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        HumanID:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        Number of times:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}


class Q4 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (human H), find all the aliens he/she killed during the specified period (from date F to date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        HumanID:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q5 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (human H) to find all the aliens who kidnapped him/her and were killed</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        HumanID:
                        <input type="text" className="request_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q6 extends Component {

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        let data = new FormData(event.target);
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/q6',
            params: {
                "count": data.get("count"),
                "start_date": data.get("start_date"),
                "end_date": data.get("end_date")
            }})
            .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">Find all aliens who abducted at least (N) different people during the specified period (from the date
                    F by date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        Number of people:
                        <input type="text" className="request_input" name="count"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="start_date"
                               defaultValue="2018-07-22" />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="end_date"
                               defaultValue="2018-07-22"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q7 extends Component {


    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        let data = new FormData(event.target);
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/q7',
            params: {
                "count": data.get("count"),
                "start_date": data.get("start_date"),
                "end_date": data.get("end_date")
            }})
            .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }

    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">Find all people who have been abducted at least (N) times during the specified period (from date F to date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        Number of times:
                        <input type="text" className="request_input" name="count"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="start_date"
                               defaultValue="2018-07-22" />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="end_date"
                               defaultValue="2018-07-22" />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q8 extends Component {

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        let data = new FormData(event.target);
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/q8',
            params: {
                "human_name": data.get("human_name"),
                "alien_name": data.get("alien_name"),
                "start_date": data.get("start_date"),
                "end_date": data.get("end_date")
            }})
            .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }

    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">Find all joint excursions and experiments for (alien A) and (person H) for the specified period (from date F to date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        Alien Name:
                        <input type="text" className="request_input" name="alien_name"/>
                    </label>
                    <label className="request_label">
                        Human Name:
                        <input type="text" className="request_input" name="human_name"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="start_date"
                               defaultValue="2018-07-22"/>
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="end_date"
                               defaultValue="2018-07-22"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q9 extends Component {

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        let data = new FormData(event.target);
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/q9',
            params: {
                "count": data.get("count"),
                "alien_name": data.get("alien_name"),
                "start_date": data.get("start_date"),
                "end_date": data.get("end_date")
            }})
            .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }

    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (alien A) and each excursion he conducted, find how many times during the specified
                    period (from date F to date T) he conducted an excursion for at least (N) people;</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        Alien Name:
                        <input type="text" className="request_input" name="alien_name"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="start_date"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="end_date"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        Number of people:
                        <input type="text" className="request_input" name="count"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q10 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">For (human H) and each experiment in which he/she participated, find how many times during
                    the specified period (from date F to date T) the experiment was performed on him/her by at least N aliens;</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        HumanID:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        Number of aliens:
                        <input type="text" className="request_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q11 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">Find the total number of abductions by months</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class Q12 extends Component {
    render() {
        return (
            <div className="request_results_container">
                <h1 className="request_text">Find ships in descending order of the total number of experiments that were conducted on
                    ship with the participation of this (alien A) during the specified period (from date F to date T);</h1>
                <form className="request_form" onSubmit={this.handleSubmit}>
                    <label className="request_label">
                        AlienID:
                        <input type="text" className="request_input"/>
                    </label>
                    <label className="request_label">
                        From Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="request_label">
                        To Date:
                        <input className="request_input" type="date" id="start" name="trip-start"
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}