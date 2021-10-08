import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";
import PhoneInput from 'react-phone-input-2';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fname:"",
      lname:"",
      formErrfname:"",
      formErrlname:"",
      email:"",
      formErremail:"",
      password:"",
      formErrpassword:"",
      cpassword:"",
      formErrcpassword:"",
      mobile_no:"",
      formErrmobile_no:"",
      country_code:"+1",
      formErrcountry_code:"",
      local_city:"",
      formErrlocal_city:"",
      
    }
  }
  handleSubmit = async () => {
    // console.log((this.state.processingFees.split("+")).length)
    // return
    await this.setState({
      formErrfname: (this.state.fname === '') ? "Please provide this field" : '',
      formErrlname: (this.state.lname == '') ? "Please provide this field" : '',
      formErremail: (this.state.email == '') ? "Please provide this field" : '',
      formErrpassword: (this.state.password == '') ? "Please provide this field" : '',
      formErrcpassword: (this.state.cpassword == '') ? "Please provide this field" : '',
      formErrcpassword: (this.state.cpassword == this.state.password) ? "Password confirm password mismatch" : '',

      formErrmobile_no: (this.state.mobile_no == '') ? "Please provide this field" : '',
      formErrcountry_code: (this.state.country_code == '') ? "Please provide this field" : '',
      formErrlocal_city: (this.state.local_city == '') ? "Please provide this field" : '',
    })
    if (!((this.state.fname === '') && (this.state.lname === '') && (this.state.email === '') && (this.state.password === '') && (this.state.cpassword === '') && (this.state.mobile_no === '') && (this.state.country_code === '') && (this.state.local_city === ''))){

      this.props.onregister({
        
        mobile_no:this.state.mobile_no,
        country_code:this.state.country_code,
        local_city:this.state.local_city,
        name:this.state.fname + " "+this.state.lname ,
        email: this.state.email,
        password: this.state.password,
      })

    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { enqueueSnackbar, error, success } = this.props;
    success && enqueueSnackbar(success, { variant: "success" });
    error && enqueueSnackbar(error, { variant: "error" });
  }
  onChangeAddName = async (key, value) => {
    var self = this;
    await self.setState({
      [key]: value,
      ['formErr' + key]: (value === '') ? 'Please provide this field' : ''
    })
  }
  render(){
  return (
    <div className='modalcont'>
      <div className='modalinner'>
        <div className='logo' href='#'>
          <img src={require('../assets/images/logo.png')} className='img-fluid' />
        </div>
        <h2>Sign Up</h2>

        <div className='loginForm'>
          <div className='mb-3 mt-3'>
            <label htmlFor='Name' className='form-label'>First Name</label>
            <input type='text' className='form-control form-control-lg' id='Name' placeholder='First Name'
              value={this.state.fname}
              onChange={(e) => this.onChangeAddName('fname', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrfname}</span>

          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='Last' className='form-label'>Last Name</label>
            <input type='text' className='form-control form-control-lg' id='Last' placeholder='Last Name' 
              value={this.state.lname}
              onChange={(e) => this.onChangeAddName('lname', e.target.value)}
            />
          <span style={{ color: 'red' }}>{this.state.formErrlname}</span>
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='Phone' className='form-label'>Phone Number</label>
            
            <PhoneInput
              country={'us'}
              // value={this.state.country_code}
              // onChange={(e) => this.onChangeAddName('country_code', e.target.value)}
              onChange={(country_code) =>{
                console.log(country_code)
                this.setState({
                  country_code: '+' + country_code,
                })
              }
                
              }
            />
            
            <span style={{ color: 'red' }}>
              {this.state.formErrcountry_code}
            </span>
            <input type='text' className='form-control form-control-lg' id='Phone' placeholder='Phone Number' value={this.state.mobile_no}
              onChange={(e) => this.onChangeAddName('mobile_no', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrmobile_no}</span>
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' className='form-control form-control-lg' id='email' placeholder='name@example.com' value={this.state.email}
              onChange={(e) => this.onChangeAddName('email', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErremail}</span>
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='City' className='form-label'>City</label>
            <input type='text' className='form-control form-control-lg' id='City' placeholder='City' value={this.state.local_city}
              onChange={(e) => this.onChangeAddName('local_city', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrlocal_city}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control form-control-lg' id='password' value={this.state.password}
              onChange={(e) => this.onChangeAddName('password', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrpassword}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='password2' className='form-label'>Confirm Password</label>
            <input type='password' className='form-control form-control-lg' id='password2'  value={this.state.cpassword}
              onChange={(e) => this.onChangeAddName('cpassword', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrcpassword}</span>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary btn-lg' type='button'
            onClick={(e) => this.handleSubmit()}
            >Sign Up</button>
          </div>

          <div className='d-flex justify-content-center mt-4 mb-4'>
            <p className='cyanLinks'>Already have an account?</p>
            <Link to ="" className='cyanLinks'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
}
const mapPropsToState = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onregister: (data) => dispatch(actions.register(data))
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Signup));
