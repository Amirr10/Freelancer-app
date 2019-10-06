import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Search from './Search/Search';
import Login from './Login/Login';

 const NavBar = () => {
    return (
     <div className="navBarWrapper">
        <header className="navBar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li className="login-nav"><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>

        <Route path="/" exact component={Welcome} />
        <Route path="/search" exact component={Search} />
        <Route path="/login" exact component={Login} />

    </div>
      
    )
}

export default NavBar;
