import React, { Component} from 'react';
import StaffList from './StaffList';
import { STAFFS,DEPARTMENTS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';
import DetailStaff from './DetailStaff'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state ={
      staffs: STAFFS,
      department: DEPARTMENTS,
    }
    this.callbackFunction = this.callbackFunction.bind(this);
  }
  callbackFunction = (childData) => {
    const newList = this.state.staffs;
    const id = this.state.staffs.length;
    childData.id = id;
    if (childData.department ==='Sale')
      childData.department = this.state.department[0];
    else if (childData.department ==='HR')
      childData.department = this.state.department[1];
    else if (childData.department ==='Marketing')
      childData.department = this.state.department[2];
    else if(childData.department ==='IT')
      childData.department = this.state.department[3];
    else 
      childData.department = this.state.department[4];
    newList.push(childData);
    this.setState({
      staffs: newList
    });
}
  render() {
    const staffsWithId = ({match}) => {
      if (this.state.staffs.length >parseInt(match.params.idStaff,10)){
      return(
          <DetailStaff dish={this.state.staffs.filter((staffs) => staffs.id === parseInt(match.params.idStaff,10))[0]} 
             />
      );
      }
      else{
        return(
          <h3>lỗi</h3>
        )
      }
    };
    return (
      <div className="app">
        <Header />
          <Switch>
              <Route exact path="/liststaff" component={() => <StaffList dishes={this.state.staffs} parentCallback = {this.callbackFunction}/> }/>
              <Route path='/liststaff/:idStaff' component={staffsWithId} />
              <Route exact path='/department' component={() => <Department department={this.state.department}/> }/>
              <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs} allItem ={1}/>} />
              <Redirect to='/liststaff'/>
          </Switch>
        <Footer />
    </div>
  )
}
}
export default Main;