import React, {Component} from "react";
import { Link } from 'react-router-dom'
import "../styles/fill_tables.css"


export class AlienHostExcursion extends Component {
    render() {
        return(
            <div><NavigationBar/><AlienExcursionHost/></div>)
    }
}

export class AlienHumanAbduct extends Component {
    render() {
        return(
            <div><NavigationBar/><AlienAbductHuman/></div>)
    }
}

export class AlienExperimentConduct extends Component {
    render() {
        return(
            <div><NavigationBar/><AlienConductExperiment/></div>)
    }
}

export class AlienHumanTransport extends Component {
    render() {
        return(
            <div><NavigationBar/><AlienTransportHuman/></div>)
    }
}

export class HumanSpaceshipEscape extends Component {
    render() {
        return(
            <div><NavigationBar/><HumanEscapeSpaceship/></div>)
    }
}

export class HumanAlienKill extends Component {
    render() {
        return(
            <div><NavigationBar/><HumanKillAlien/></div>)
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


class AlienExcursionHost extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Host excursion: </h1>
                <form className="filling_form">
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}


class AlienAbductHuman extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Abduct human: </h1>
                <form className="filling_form">
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        fromShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class AlienConductExperiment extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Conduct experiment:</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class AlienTransportHuman extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Transport human:</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        fromShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        toShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}


class HumanEscapeSpaceship extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Escape spaceship: </h1>
                <form className="filling_form">
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class HumanKillAlien extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Kill alien: </h1>
                <form className="filling_form">
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Date:
                        <input className="filling_input" type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}