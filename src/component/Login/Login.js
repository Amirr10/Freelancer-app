import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import Welcome from '../Welcome/Welcome';

class Login extends Component {

    state = {
        loaded: false
    }

     submitHandler = () => {
       this.setState({ loaded: true });
    }

    render(){

        if(this.state.loaded){
            return <Redirect to="/" />
        }

      return (
        <div className="login">
            <h2 style={marRight}>Login</h2> <br />
            <form onSubmit={this.submitHandler}> 
                <input type="text" className="input" placeholder="Enter Username" /> <br /> <br />
                <input type="text" className="input" placeholder="Enter Password" /> <br /> 
                <button className="welBtn" type="submit" >Submit</button>
            </form>

        </div>
        )
     }
}

const marRight = {
    marginRight:'20px'
}

export default Login
