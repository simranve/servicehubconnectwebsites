import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      formErremail: '',
      password: '',
      formErrpassword: '',
    }
  }
  handleSubmit = async () => {
    // console.log((this.state.processingFees.split("+")).length)
    // return
    await this.setState({
      formErremail: (this.state.email === '') ? "Please provide this field" : '',
      formErrpassword: (this.state.password == '') ? "Please provide this field" : '',
    })
    if (!((this.state.email === '') && (this.state.password === ''))){

      // this.props.onAuth({
      //   email: this.state.email,
      //   password: this.state.password,
      // })

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
        <h2>Login</h2>

        <div className='loginForm'>
          <div className='mb-3 mt-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control form-control-lg' id='email' 
              placeholder='Enter email id'
              value={this.state.email}
              onChange={(e) => this.onChangeAddName('email', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErremail}</span>

          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control form-control-lg' id='password'
            value={this.state.password}
              onChange={(e) => this.onChangeAddName('password', e.target.value)}
            />
            <span style={{ color: 'red' }}>{this.state.formErrpassword}</span>

          </div>

          <div className='d-grid'>
            <button className='btn btn-primary btn-lg' type='button'
            onClick={(e) => this.handleSubmit()}
            >Login</button>
          </div>

          <div className='d-flex justify-content-between mt-4 mb-4'>
            <Link to = "" className='cyanLinks'>Forgot Password?</Link>
            <Link to = "" className='cyanLinks'>Sign Up</Link>
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
)(withSnackbar(Login));
