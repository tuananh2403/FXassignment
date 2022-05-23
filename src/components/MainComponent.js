import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import StaffList from './StaffList'
import { STAFFS } from '../shared/staffs';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDish : null,
      dishes : STAFFS
    };
  }
  onSelectDish(dish){
      this.setState({ selectedDish: dish})
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
            <NavbarBrand href="/">Danh Sách Nhân Viên</NavbarBrand>
        </Navbar>
        <StaffList dishes={this.state.dishes} 
        onClick={(dish) => this.onSelectDish(dish)}
        selectedDish = {this.state.selectedDish}/>
    </div>
  );
}
}

export default Main;
