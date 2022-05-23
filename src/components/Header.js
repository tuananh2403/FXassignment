import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavItem,Nav} from 'reactstrap'
 function Header(){
     return (
        <div>
            <Navbar dark color="primary">
                <NavbarBrand href="/">Danh Sách Nhân Viên</NavbarBrand>
                <Nav>
                    <NavbarBrand><i class='bx bxs-user'></i>Nhân Viên</NavbarBrand>
                    <NavbarBrand><i class='bx bxs-business'></i>Phòng Ban</NavbarBrand>
                    <NavbarBrand><i class='bx bx-money-withdraw' ></i>Bảng Lương</NavbarBrand>
                </Nav>
            </Navbar>
        </div>
     )
 }
 export default Header;