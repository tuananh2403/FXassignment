import React from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import dateFormat from "dateformat";
function DetailStaff(props){
    if(props.dish){
        return(
            <div className="container">
        <div className="row ">
            <div className="col-3 mt-4">
                <img width ='100%'src={props.dish.image}/>
            </div>
            <div className="col-7">
             <CardBody>
                <CardTitle className="name">Họ và Tên : {props.dish.name}</CardTitle>
                <CardText>Ngày Sinh: {dateFormat(props.dish.date,'dd/mm/yyyy')}</CardText>
                <CardText>Ngày vào công ty: {dateFormat(props.dish.startDate,"dd/mm/yyyy")}</CardText>
                <CardText>Phòng Ban : {props.dish.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại : {props.dish.annualLeave}</CardText>
                <CardText>Số ngày làm thêm : {props.dish.overTime}</CardText>
             </CardBody>
             </div>
        </div>
    </div>
        )
    }else return <div></div>
}

export default DetailStaff;