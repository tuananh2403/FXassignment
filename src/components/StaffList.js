import React from "react";
import {Card,CardBody,CardTitle} from "reactstrap"

function StaffList(props) {
    const menu = props.staff.map((dish) => {
        return (
            <div key ={dish.id} className="col-12 col-sm-4 col-lg-2 mt-2">
                <Card onClick={() => this.props.onClick(dish)}>
                <img src={dish.image}/>
                       <CardBody body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                       </CardBody>
                </Card>
            </div>
        )
    })
    return(
        <div className="App">
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        </div>
    ) 
}   
 export default StaffList;