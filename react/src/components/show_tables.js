import React, {Component} from "react";
import {Link} from "react-router-dom";
import {SQLTable} from './table.js'
import axios from 'axios';


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


class ShowAlienTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/alien',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Alien table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Name"]} />}
                </div>
            </div>
        )
    }
}

class ShowHumanTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/human',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Human table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Name"]} />}
                </div>
            </div>
        )
    }
}

class ShowSpaceshipTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/spaceship',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Spaceship table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Title"]} />}
                </div>
            </div>
        )
    }
}

class ShowExcursionTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/excursion',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Excursion table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Date", "Human", "Alien"]} />}
                </div>
            </div>
        )
    }
}

class ShowExperimentTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/experiment',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Experiment table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Date", "Human", "Alien"]} />}
                </div>
            </div>
        )
    }
}

class ShowTransportationTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/transportation',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Transportation table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Human", "Alien", "From Ship ID", "To Ship ID", "Date"]} />}
                </div>
            </div>
        )
    }
}

class ShowRedemptionTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/redemption',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Redemption table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Human", "Spaceship", "Date"]} />}
                </div>
            </div>
        )
    }
}

class ShowMurderTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/murder',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Murder table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Human", "Alien", "Date"]} />}
                </div>
            </div>
        )
    }
}

class ShowAbductionTable extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            data_recieved: false
        }
    }

    handleSubmit = (event) => {

        event.preventDefault();
        console.log("In handleSubmit");
        axios({ //Request data from the server
            method: 'get',
            url: '/api/display/abduction',
           })
           .then(res => res.data)
           .then(data => this.setState({data, data_recieved: true}))
            // .then(res => console.log(JSON.stringify(res.data))); //do something with the data (for example setState)
    }     

    render() {
        return (
            <div className="alien_choose_request">
                <h1 className="request_text">Abduction table: </h1>
                <input type="submit" className="show_button" onClick={this.handleSubmit}/>
                <div className="sql_table">
                    {this.state.data_recieved && <SQLTable data={this.state.data} columns={["ID", "Human", "Alien", "Spaceship", "Date"]} />}
                </div>
            </div>
        )
    }
}
