import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Stationery from './components/StationeryComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Muschool Supply Co.</NavbarBrand>
                </div>
                </Navbar>
                <Stationery />
            </div>
        );
    }
}

export default App;
