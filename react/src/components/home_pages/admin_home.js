import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import admin_hi from "../../images/admin_hi.png";
import "../../styles/admin_home.css"


const AdminHome = ()=>{
    return(
        <div className="human_home_page_container">
            <NavigationBar/>
            <AdminHi/>
        </div>
    )
};
export default AdminHome;


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


class AdminHi extends Component {
    render() {
        return (
            <div className="admin_photo">
                <img
                    src={admin_hi}
                    className="admin_hi"
                    alt=""
                />
                <div className="admin_hi_text">
                    <h1 className="admin_hi_text_header">Hi, Admin...</h1>
                </div>
            </div>
        )
    }
}