import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import "../styles/fill_tables.css"


export class FillAlienTable extends Component {
    render() {
        return(
            <div><NavigationBar/><AlienFill/></div>)
    }
}

export class FillSpaceshipTable extends Component {
    render() {
        return(
            <div><NavigationBar/><SpaceshipFill/></div>)
    }
}

export class FillHumanTable extends Component {
    render() {
        return(
            <div><NavigationBar/><HumanFill/></div>)
    }
}

export class FillTransportationTable extends Component {
    render() {
        return(
            <div><NavigationBar/><TransportationFill/></div>)
    }
}

export class FillExcursionTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ExcursionFill/></div>)
    }
}

export class FillRedemptionTable extends Component {
    render() {
        return(
            <div><NavigationBar/><RedemptionFill/></div>)
    }
}

export class FillMurderTable extends Component {
    render() {
        return(
            <div><NavigationBar/><MurderFill/></div>)
    }
}

export class FillAbductionTable extends Component {
    render() {
        return(
            <div><NavigationBar/><AbductionFill/></div>)
    }
}

export class FillConvictionLogTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ConvictionLogFill/></div>)
    }
}

export class FillExperimentTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ExperimentFill/></div>)
    }
}

export class FillExperimentAlienTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ExperimentAlienFill/></div>)
    }
}

export class FillExcursionHumanTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ExcursionHumanFill/></div>)
    }
}


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

class AlienFill extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Alien Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        Name:
                        <input type="text" name="name" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Status:
                        <input type="text" name="status" className="filling_input"/>
                    </label>
                    <input type="submit" className="send_button"/>
                </form>
            </div>
        )
    }
}

class HumanFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Human Table</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        Name:
                        <input type="text" className="filling_input"/>
                    </label>
                    <label className="filling_label">
                        Status:
                        <input type="text" className="filling_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class SpaceshipFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Spaceship Table</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        Title:
                        <input type="text" className="filling_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ExcursionFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Excursion Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class RedemptionFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Redemption Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class MurderFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Murder Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class TransportationFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Transportation Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class AbductionFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Abduction Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ConvictionLogFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling ConvictionLog Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <label className="filling_label">
                        Source:
                        <input type="text" className="filling_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ExperimentFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Experiment Table</h1>
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
                               defaultValue="2018-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ExperimentAlienFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling ExperimentAlien Table</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ExcursionHumanFill extends Component {
    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling ExcursionHuman Table</h1>
                <form className="filling_form">
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}