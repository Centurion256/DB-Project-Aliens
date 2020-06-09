import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import "../styles/fill_tables.css"
import axios from 'axios';


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

export class FillExperimentTable extends Component {
    render() {
        return(
            <div><NavigationBar/><ExperimentFill/></div>)
    }
}

// export class FillExperimentAlienTable extends Component {
//     render() {
//         return(
//             <div><NavigationBar/><ExperimentAlienFill/></div>)
//     }
// }

// export class FillExcursionHumanTable extends Component {
//     render() {
//         return(
//             <div><NavigationBar/><ExcursionHumanFill/></div>)
//     }
// }


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
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/alien',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
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
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/human',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Human Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        Name:
                        <input type="text" className="filling_input" name="name"/>
                    </label>
                    <label className="filling_label">
                        Status:
                        <input type="text" className="filling_input" name="status"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class SpaceshipFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/ship',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Spaceship Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        Title:
                        <input type="text" className="filling_input" name="title"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class ExcursionFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);

        axios({
            method: 'post',
            url: '/api/fill/excursion',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Excursion Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input" name="alien_id"/>
                    </label>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input" name="ship_id"/>
                    </label>
                    <label className="filling_label">
                        Human iD's (put them seperated by comma if several):
                        <input type="text" className="filling_input" name="humans"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class RedemptionFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/redemption',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Redemption Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input" name="ship_id"/>
                    </label>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input" name="human_id"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class MurderFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/murder',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Murder Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
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
                               defaultValue="2021-07-22"
                                />
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class TransportationFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/transportation',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Transportation Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input" name="alien_id"/>
                    </label>
                    <label className="filling_label">
                        fromShipID:
                        <input type="text" className="filling_input" name="from_ship_id"/>
                    </label>
                    <label className="filling_label">
                        toShipID:
                        <input type="text" className="filling_input" name="to_ship_id"/>
                    </label>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input" name="human_id"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

class AbductionFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({ 
            method: 'post',
            url: '/api/fill/abduction',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Abduction Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input" name="human_id"/>
                    </label>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input" name="ship_id"/>
                    </label>
                    <label className="filling_label">
                        AlienID:
                        <input type="text" className="filling_input" name="alien_id"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}


class ExperimentFill extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        axios({
            method: 'post',
            url: '/api/fill/experiment',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        })
    }

    render() {
        return (
            <div className="filling_form_page">
                <h1 className="admin_fill_text">Filling Experiment Table</h1>
                <form className="filling_form" onSubmit={this.handleSubmit}>
                    <label className="filling_label">
                        HumanID:
                        <input type="text" className="filling_input" name="human_id"/>
                    </label>
                    <label className="filling_label">
                        ShipID:
                        <input type="text" className="filling_input" name="ship_id"/>
                    </label>
                    <label className="filling_label">
                        Aliens iD's (put them seperated by comma if several):
                        <input type="text" className="filling_input" name="aliens"/>
                    </label>
                    <input type="submit" value="Send" className="send_button"/>
                </form>
            </div>
        )
    }
}

// class ExperimentAlienFill extends Component {
//     handleSubmit = (event) => {
//         event.preventDefault();
//         let formData = new FormData(event.target);
//         axios({
//             method: 'post',
//             url: '/api/fill/alien',
//             data: formData,
//             headers: {
//                 'Content-Type': 'multipart/form-data', 
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="filling_form_page">
//                 <h1 className="admin_fill_text">Filling ExperimentAlien Table</h1>
//                 <form className="filling_form" onSubmit={this.handleSubmit}>
//                     <label className="filling_label">
//                         AlienID:
//                         <input type="text" className="filling_input"/>
//                     </label>
//                     <input type="submit" value="Send" className="send_button"/>
//                 </form>
//             </div>
//         )
//     }
// }

// class ExcursionHumanFill extends Component {
//     handleSubmit = (event) => {
//         event.preventDefault();
//         let formData = new FormData(event.target);
//         axios({
//             method: 'post',
//             url: '/api/fill/alien',
//             data: formData,
//             headers: {
//                 'Content-Type': 'multipart/form-data', 
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="filling_form_page">
//                 <h1 className="admin_fill_text">Filling ExcursionHuman Table</h1>
//                 <form className="filling_form" onSubmit={this.handleSubmit}>
//                     <label className="filling_label">
//                         AlienID:
//                         <input type="text" className="filling_input"/>
//                     </label>
//                     <input type="submit" value="Send" className="send_button"/>
//                 </form>
//             </div>
//         )
//     }
// }