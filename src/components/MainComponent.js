import React, { Component, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import StaffList from './StaffList';
import { STAFFS } from '../shared/staffs';
import Header from './Header';
import Footer from './Footer';

function Main(){
  const [staff, setStaff] = useState(STAFFS);
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/" element={<StaffList staff={staff}/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default Main;