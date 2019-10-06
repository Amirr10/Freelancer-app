import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import NavBar from './component/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
            <div className="App">
                <NavBar />
           </div>
        </MuiThemeProvider>
      </BrowserRouter>

    )
  }
}

export default App;
