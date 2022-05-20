import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import StaffList from './StaffList'
import { STAFFS } from '../shared/staffs';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : STAFFS
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
            <NavbarBrand href="/">Danh Sách Nhân Viên</NavbarBrand>
        </Navbar>
        <StaffList dishes={this.state.dishes}/>
    </div>
  );
}
}

export default Main;
