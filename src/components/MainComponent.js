import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import StaffList from './StaffList'
import { STAFFS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';
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
        <Header />
        <StaffList dishes={this.state.dishes} 
        onClick={(dish) => this.onSelectDish(dish)}
        selectedDish = {this.state.selectedDish}/>
        <Footer />
    </div>
  );
}
}

export default Main;
