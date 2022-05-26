import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
 class Header extends Component {
    constructor(prop){
        super(prop);
        this.toggleNav = this.toggleNav.bind(this);
           this.state = {
             isNavOpen: false
           };
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      render(){
          return (
              <React.Fragment>
                <Navbar dark  color='primary' expand="md">
                 <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/safft'><span className="fa fa-group fa-lg"></span>Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/department'><span className="fa fa-address-card fa-lg"></span> Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa fa-money fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
      </Navbar>
              </React.Fragment>
     )
    }
 }
 export default Header;