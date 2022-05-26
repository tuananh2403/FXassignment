import React from "react";
import {Card,CardBody,CardTitle,CardImg} from "reactstrap"
import {Link} from "react-router-dom"

function RenderMenuItem ({staffs}) {
    return (
        <Card>
            <Link to={`/liststaff/${staffs.id}`} >
                <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                <CardTitle style = {{color:"black", textAlign: "center"}}>{staffs.name}</CardTitle>
            </Link>
        </Card>
    );
}
function StaffList(props) {
    const menu = props.dishes.map((staffs) => {
        return (
            <div key ={staffs.id} className="col-12 col-sm-4 col-lg-2 mt-2">
                <Card>
                <RenderMenuItem staffs = {staffs}/>
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