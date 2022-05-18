import React,{ Component} from "react";
import { Media } from "reactstrap";
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import dateFormat from "dateformat";

 class StaffList extends Component {
     constructor(props) {
         super(props);
         this.state ={
             selectedDish:null
         }
     }
     onDishSelected(dish) {
         this.setState({selectedDish:dish})
     }
    renderDish(dish) {
        if(dish !=null){
            return(

                <div className="col-12">
                <Card> 
                     <CardBody>
                        <CardTitle className="name">Họ và Tên : {dish.name}</CardTitle>
                        <CardText>Ngày Sinh: {dateFormat(dish.date,'dd/mm/yyyy')}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(dish.startDate,"dd/mm/yyyy")}</CardText>
                        <CardText>Phòng Ban : {dish.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại : {dish.annualLeave}</CardText>
                        <CardText>Số ngày làm thêm : {dish.overTime}</CardText>

                     </CardBody>
                </Card>
            </div>
                )
        }else{
            return (
                <div></div>
            )
        }
    }
     render() {
         const menu = this.props.dishes.map((dish) => {
             return (
                 <div key ={dish.id} className="col-12 col-sm-6 col-lg-4 mt-2">
                     <Card onClick={() => this.onDishSelected(dish)}> 
                            <CardBody body className="ml-5">
                                 <CardTitle>{dish.name}</CardTitle>
                            </CardBody>
                     </Card>
                 </div>
             )
         })
         return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row mt-2">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
         );
     }
 }
 export default StaffList;