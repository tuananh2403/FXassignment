import React from "react";
import { CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import dateFormat from "dateformat";
function DetailStaff(props){
        return(
            <div className="container">
             <div className="row ">
                 <Breadcrumb>
                    <BreadcrumbItem><Link to="/liststaff">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                 </Breadcrumb>
                 <div className="col-12">
                        <hr />
                    </div  >
                    </div>
        <div className="row">
            <div className="col-3 mt-4">
                <img width ='100%'src={props.dish.image}/>
            </div>
            <div className="col-7">
             <CardBody>
                <CardTitle className="name">Họ và Tên : {props.dish.name}</CardTitle>
                <CardText>Ngày Sinh: {dateFormat(props.dish.doB,'dd/mm/yyyy')}</CardText>
                <CardText>Ngày vào công ty: {dateFormat(props.dish.startDate,"dd/mm/yyyy")}</CardText>
                <CardText>Phòng Ban : {props.dish.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại : {props.dish.annualLeave}</CardText>
                <CardText>Số ngày làm thêm : {props.dish.overTime}</CardText>
             </CardBody>
             </div>
        </div>
    </div>
        )
}

export default DetailStaff;