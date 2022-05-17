import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
            <NavbarBrand href="/">Danh Sách Nhân Viên</NavbarBrand>
        </Navbar>
    </div>
  );
}
}

export default App;
