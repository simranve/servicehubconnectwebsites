import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      email:"",
      password:"",
      mobile_no:"",
      country_code:"",
      local_city:""
    }
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
            <input type='text' className='form-control form-control-lg' id='Name' placeholder='First Name' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='Last' className='form-label'>Last Name</label>
            <input type='text' className='form-control form-control-lg' id='Last' placeholder='Last Name' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='Phone' className='form-label'>Phone Number</label>
            <input type='text' className='form-control form-control-lg' id='Phone' placeholder='Phone Number' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' className='form-control form-control-lg' id='email' placeholder='name@example.com' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='City' className='form-label'>City</label>
            <input type='text' className='form-control form-control-lg' id='City' placeholder='City' />
          </div>
          <div className='mb-3 mt-3'>
            <label htmlFor='Code' className='form-label'>Referal Code</label>
            <input type='text' className='form-control form-control-lg' id='Code' placeholder='Referal Code' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control form-control-lg' id='password' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password2' className='form-label'>Confirm Password</label>
            <input type='password' className='form-control form-control-lg' id='password2' />
          </div>

          <div className='d-grid'>
            <button className='btn btn-primary btn-lg' type='button'>Login</button>
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
    onAuth: (data) => dispatch(actions.auth(data))
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Signup));
