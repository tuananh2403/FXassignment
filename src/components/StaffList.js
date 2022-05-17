import React,{ Component} from "react";
import { Media } from "reactstrap";

 class StaffList extends Component {
     constructor(props) {
         super(props);
         this.state ={}
     }
     render() {
         const menu = this.props.dishes.map((dish) => {
             return (
                 <div key ={dish.id} className="col-5 m-2 border">
                     <Media tag ="li" style ={{listStyleType: 'none'}}>
                         <Media body className="ml-3">
                                <Media heading>{dish.name}</Media>
                         </Media>
                     </Media>
                 </div>
             )
         })
         return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
         );
     }
 }
 export default StaffList;