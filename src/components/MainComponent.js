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
              <Route exact path="/liststaff" component={() => <StaffList dishes={this.state.staffs}/>}/>
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