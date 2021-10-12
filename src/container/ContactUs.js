import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";
import Map from './Rideshare/map'
import PhoneInput from 'react-phone-input-2'
class ContactUs extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          longitude:0,
          latitude:0,
          address: "",
          email: "",
          country_code: "",
          contact_Number: "",
        }
      }
      handlelatlong = (value) => {
        this.setState({
          latitude:value.latitude,
          longitude:value.longitude
        })
      }
      handleAddress = (value) => {
        console.log(value)
        this.setState({
          address:value
        })
      }
      handlepincode = (value)=>{}
      handlecityname = (value)=>{}
      componentWillMount() {
        this.props.getConactUsAction();
        console.log("simran",this.props)
        if(this.props.contact !== null){
          
          console.log(this.props.contact)
          const data = this.props.contact
          this.setState({
            longitude:data.location.coordinates[0],
            latitude:data.location.coordinates[1],
            address: data.address,
            email: data.email,
            country_code: data.country_code,
            contact_Number: data.contact_Number
          })
        }
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
            <div className='row'>
              <div className='col'>
                <div style={{ height: 400, width: '100%', border: '1px solid #000' }}>
                    <Map
                      center={{ lat: this.state.latitude, lng: this.state.longitude }}
                      handlelatlong={(e)=>this.handlelatlong(e)}
                      handleAddress={(e)=>this.handleAddress(e)}
                      handlepincode={(e)=>this.handlepincode(e)}
                      handlecityname={(e)=>this.handlecityname(e)}
                      height='400px'
                      value={this.state.address}
                      // onChange={(e) => this.onChangeAddName('location', e.target.value)}
                      zoom={15}
                    />
                </div>
                <span style={{ color: 'red' }}>{this.state.formErrlongitude}</span>
                <span style={{ color: 'red' }}>{this.state.formErrlatitude}</span>

              </div>

              <div className='col'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label className='form-control-label' for='input-username'>Phone Number</label>
                      <PhoneInput
                        country={'us'}
                        value={this.state.country_code}
                        // onChange={(e) => this.onChangeAddName('country_code', e.target.value)}
                        // onChange={country_code => this.setState({ country_code:'+'+country_code })}
                      />
                      <span style={{ color: 'red' }}>{this.state.formErrcountry_code}</span>
                      <input type='text' id='input-username' className='form-control' placeholder='Phone Number' 
                        value={this.state.contact_Number}
                      //   onChange={(e) => this.onChangeAddName('contact_Number', e.target.value)}
                      />
                      <span style={{ color: 'red' }}>{this.state.formErrcontact_Number}</span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label className='form-control-label' for='input-email'>Email</label>
                      <input type='email' id='input-email' className='form-control' placeholder='Email'
                        value={this.state.email}
                      //   onChange={(e) => this.onChangeAddName('email', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label className='form-control-label'>Professional Description</label>
                      {/* <input rows='4' className='form-control' placeholder='A few words about you ...'
                      value={this.state.address}
                      /> */}
                      <input type='text' id='input-first-name' className='form-control' placeholder='Business Location' 
                      value={this.state.address} 
                      // onChange={(e) => this.onChangeAddName('address', e.target.value)}
                      />
                    <span style={{ color: 'red' }}>{this.state.formErraddress}</span>

                    </div>
                  </div>
                </div>

                <button className='btn btn-success float-right' type='button'
                  // onClick={(e) => this.handleSubmit()}
                >Update</button>
                <button className='btn btn-default float-right mr-4' type='button'>Cancel</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
  }
}
const mapPropsToState = (state) => {
  return {
    success: state.pages.success,
    error: state.pages.error,
    contact: state.pages.contact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getConactUsAction: () => dispatch(actions.getConactUs()),
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(ContactUs));
