import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <h2 style={{marginRight:'20px'}}>Login</h2> <br />
            <form>
                <input type="text" className="input" placeholder="Enter Username" /> <br /> <br />
                <input type="text" className="input" placeholder="Enter Password" /> <br /> 
                <button className="welBtn" type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Login
