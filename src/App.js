import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Stationery from './components/StationeryComponent';
import { STATITEMS } from './shared/stationeryitems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statItems: STATITEMS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Muschool Supply Co.</NavbarBrand>
                </div>
                </Navbar>
                <Stationery statItems={this.state.statItems}/>
            </div>
        );
    }
}

export default App;
