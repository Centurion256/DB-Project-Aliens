import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/login.css"
import { Button} from 'react-bootstrap';


const Login = ()=>{
    return(
        <div className="login_page_container">
            <h1 className="login_page_text">Select who you are: </h1>
            <div className="login_page_buttons">
                <Link to="/alien_home">
                    <Button class="button" renderAs="button">
                        Alien
                    </Button>
                </Link>
                <Link to="/human_home">
                    <Button class="button" renderAs="button">
                        Human
                    </Button>
                </Link>
                <Link to="/admin_home">
                    <Button class="button" renderAs="button">
                        Admin
                    </Button>
                </Link>
            </div>
        </div>
    )
};
export default Login;