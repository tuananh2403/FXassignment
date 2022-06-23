import React from "react";
import { Card, CardImg,CardTitle,Button,Input, Form, Row,Col, Modal, ModalHeader, ModalBody,Label,FormFeedback} from 'reactstrap';
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
class StaffList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            staffs : this.props.dishes,
            nameSearch:'',
            name:'',
            doB:'2000-01-01',
            startDate:'2022-01-01',
            salaryScale:1,
            department:'Sale',
            annualLeave:0,
            overTime: 0,
            isModalOpen: false,
            touched: {
                name: false,
                salaryScale:false,
                annualLeave:false,
                overTime:false
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
        this.addStaff = this.addStaff.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }
    handleSearch(event){
        event.preventDefault();
        const result = this.props.dishes.filter(s => s.name.toLowerCase().match(this.state.nameSearch.toLowerCase()));
        this.setState({
            staffs:result,
            nameSearch:this.nameSearch.value,
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(name, salaryScale, annualLeave, overTime,doB,startDate) {
        const errors = {
            name: '',
            salaryScale:'',
            annualLeave:'',
            overTime:'',
            startDate:'',
        };
        if(startDate<=doB)
            errors.startDate ='ngày vào công ty phải sau ngày sinh';

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Tên ít nhất 3 kí tự';
        else if (this.state.touched.name && name.length > 20)
            errors.name = 'Tên tối đa 20 kí tự';
        if (this.state.touched.salaryScale && salaryScale.length<=0)
            errors.salaryScale = 'Bạn chưa nhập';
        else if (this.state.touched.salaryScale && isNaN(salaryScale))
            errors.salaryScale = 'Hệ số lương phải là một số';
        else if (this.state.touched.salaryScale && !(parseFloat(salaryScale)>=1&& parseFloat(salaryScale)<=3))
            errors.salaryScale = 'Hệ số lương >= 1 và <= 3';
        if (this.state.touched.annualLeave && annualLeave.length<=0)
            errors.annualLeave = 'Bạn chưa nhập';
        else if (this.state.touched.annualLeave && isNaN(annualLeave))
            errors.annualLeave = 'kiểu nhập vào phải là số';
        else if(this.state.touched.annualLeave && parseFloat(annualLeave)<0)
            errors.annualLeave = 'Không thể nhập vào số <0';
        if (this.state.touched.overTime && overTime.length<=0)
            errors.overTime = 'Bạn chưa nhập';
        else if (this.state.touched.overTime && isNaN(overTime))
            errors.overTime = 'kiểu nhập vào phải là số';
        else if(this.state.touched.overTime && parseFloat(overTime)<0)
            errors.overTime = 'Không thể nhập vào số <0';
            
        return errors;
    }
    addStaff(event){
        event.preventDefault();
        const newStaff={
            name: this.state.name,
            salaryScale: this.state.salaryScale,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            doB: this.state.doB,
            department: this.state.department,
            startDate : this.state.startDate,
            image: '/assets/images/obama.png',
        };
        const errors= this.validate(this.state.name, this.state.salaryScale, this.state.annualLeave, this.state.overTime,this.state.doB,this.state.startDate);
        if (this.state.touched.name===true){
            if(errors.name ===''&& errors.salaryScale ===''&& errors.annualLeave ===''&& errors.overTime ===''&& errors.startDate ===''){
                this.props.parentCallback(newStaff);
                this.setState({
                    isModalOpen:false,
                    name:'',
                    touched:{ 
                        name: false,
                        salaryScale:false,
                        annualLeave:false,
                        overTime:false
                      }
                });
                
            }
        }
        else
        this.setState({
            touched: {
                name:true,
            }
        })
            return;
    }
    render() {
        const errors= this.validate(this.state.name, this.state.salaryScale, this.state.annualLeave, this.state.overTime,this.state.doB,this.state.startDate);
        const menu = this.state.staffs.map(staff => {
            return (
                <div  className="col-12 col-md-4 col-lg-2">
                    <RenderMenuItem staffs = {staff} />
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9 col-md-3 col-lg-2" style={{marginTop:"10px"}} >
                         <h4>Nhân viên</h4>
                    </div>
                    <div className="col-1">
                        <Col style={{marginTop:"10px"}}>
                            <Button type="submit" color="primary" onClick={this.toggleModal}
                                >+</Button>
                        </Col>
                    </div>
                    <div className='col-12 col-md-8'>
                         <Form onSubmit={this.handleSearch}>
                             <Row className="form-group">
                                 <Col md={{size: 6, offset: 2}}  style={{marginTop:"10px"}}>
                                    <Input type="text" id="nameSearch" name="nameSearch" 
                                      innerRef={(input) => this.nameSearch = input}
                                            onChange ={this.handleInputChange} />
                                 </Col>
                                 <Col md={{size:2, offset: 1}}  style={{marginTop:"10px"}}>
                                     <Button type="submit" color="primary" onClick={this.handleSearch}
                                     >Search</Button>
                                  </Col>
                              </Row>
                        </Form>
                     </div>
                    <hr className="mt-3"/>
                </div>              
                <div className="row">
                    {menu}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                    <Form onSubmit={this.handleAddstaff}>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label  htmlFor="name">Tên</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="name" name="name"
                                    placeholder="Trần Tuấn Anh"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </div>

                        <div className="form-group row mt-1 ">
                            <Col className="col-4">
                                <Label htmlFor="doB">Ngày sinh</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="doB" name="doB"
                                    value={this.state.doB}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </div>
                        <div className="form-group row mt-1">
                            <Col className="col-4">
                            <Label htmlFor="startDate">Ngày vào công ty</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    valid={errors.startDate === ''}
                                    invalid={errors.startDate !== ''}
                                    onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row mt-1">
                            <Col className="col-4">
                            <Label htmlFor="department">Phòng ban</Label>
                            </Col>
                            <Col className="col-8">

                                <Input type="select" id="department" name="department"
                                    value={this.state.department}
                                    onChange={this.handleInputChange} 
                                    ><option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                    </Input>
                            </Col>
                        </div>
                        <div className="form-group row mt-1">
                            <Col className="col-4">
                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="salaryScale" name="salaryScale"
                                    value={this.state.salaryScale}
                                    valid={errors.salaryScale === ''}
                                    invalid={errors.salaryScale !== ''}
                                    onBlur={this.handleBlur('salaryScale')}
                                    onChange ={this.handleInputChange} />                                    
                                <FormFeedback>{errors.salaryScale}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row mt-1">
                            <Col className="col-4">
                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại </Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="annualLeave" name="annualLeave"
                                value={this.state.annualLeave}
                                valid={errors.annualLeave === ''}
                                invalid={errors.annualLeave !== ''}
                                onBlur={this.handleBlur('annualLeave')}
                                onChange ={this.handleInputChange}  
                                />
                                <FormFeedback>{errors.annualLeave}</FormFeedback>
                            </Col>
                        </div>
                        <div className="form-group row mt-1">
                            <Col className="col-4">
                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="overTime" name="overTime"
                                value={this.state.overTime}
                                valid={errors.overTime === ''}
                                invalid={errors.overTime !== ''}
                                onBlur={this.handleBlur('overTime')}
                                onChange ={this.handleInputChange}
                                />
                                <FormFeedback>{errors.overTime}</FormFeedback>
                            </Col>
                        </div> 
                        <div class="form-group row mt-1">
                             <div class="col-12  text-center">
                                <Button type="submit" color="primary"
                                 onClick = {this.addStaff}
                                >Thêm nhân viên</Button>
                            </div>
                        </div>  
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    } 
}
 export default StaffList;