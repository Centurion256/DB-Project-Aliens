import React, {Component} from "react";
import {Link} from "react-router-dom";


export class ShowAlien extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowAlienTable/></div>)
    }
}

export class ShowHuman extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowHumanTable/></div>)
    }
}

export class ShowSpaceship extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowSpaceshipTable/></div>)
    }
}

export class ShowExcursion extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowExcursionTable/></div>)
    }
}

export class ShowExperiment extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowExperimentTable/></div>)
    }
}

export class ShowTransportation extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowTransportationTable/></div>)
    }
}

export class ShowRedemption extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowRedemptionTable/></div>)
    }
}

export class ShowMurder extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowMurderTable/></div>)
    }
}

export class ShowAbduction extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowAbductionTable/></div>)
    }
}

export class ShowConviction_Log extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowConviction_LogTable/></div>)
    }
}

export class ShowExperiment_Alien extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowExperiment_AlienTable/></div>)
    }
}

export class ShowExcursion_Human extends Component {
    render() {
        return(
            <div><NavigationBar/><ShowExcursion_HumanTable/></div>)
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


class ShowAlienTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Alien table: </h1>
            </div>
        )
    }
}

class ShowHumanTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Human table: </h1>
            </div>
        )
    }
}

class ShowSpaceshipTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Spaceship table: </h1>
            </div>
        )
    }
}

class ShowExcursionTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Excursion table: </h1>
            </div>
        )
    }
}

class ShowExperimentTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Experiment table: </h1>
            </div>
        )
    }
}

class ShowTransportationTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Transportation table: </h1>
            </div>
        )
    }
}

class ShowRedemptionTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Redemption table: </h1>
            </div>
        )
    }
}

class ShowMurderTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Murder table: </h1>
            </div>
        )
    }
}

class ShowAbductionTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Abduction table: </h1>
            </div>
        )
    }
}

class ShowConviction_LogTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Conviction_Log table: </h1>
            </div>
        )
    }
}

class ShowExperiment_AlienTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Experiment_Alien table: </h1>
            </div>
        )
    }
}

class ShowExcursion_HumanTable extends Component {
    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Excursion_Human table: </h1>
            </div>
        )
    }
}