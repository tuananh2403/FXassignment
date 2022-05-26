import React from 'react';
import { Card,CardText} from 'reactstrap';
const Department= (props)=>{
    const menu = props.department.map((department) => {
        return (
          <div  className="col-12 col-md-4 col-lg-3 m-1">
              <Card style={{margin:'10px'}}>
                    <h2 style = {{color:"black",marginTop:'5px',marginLeft:'5px'}}>{department.name}</h2>
                    <CardText style={{margin:'20px'}}>Số lượng nhân viên: {department.numberOfStaff}</CardText>
              </Card>
          </div>
        );
    });
    return (
        <div className="container">
            <div className="row">                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

   }
export default Department;