import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Search from './Search/Search';
import Login from './Login/Login';

 const NavBar = () => {
    return (
     <div className="navBarWrapper">
        <header className="navBar">
            <nav>
                <ul>
                    {/* need to Change Link  */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="login-nav"><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>

        <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/search"  component={Search} />
        <Route path="/login"  component={Login} />
        </Switch>
    </div>
      
    )
}

export default NavBar;
