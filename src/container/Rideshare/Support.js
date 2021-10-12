import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../../store/actions/index";
import Map from './map'
import PhoneInput from 'react-phone-input-2'

const style = {
  width: "60%",
  height: "50%",
  borderRadius: "22px",

  border: "1px solid #CECECE",
  "@media(max-Width: 768px)": {
    width: "100% !important",
    marginBottom: "20px !important",
  },
};
class Google extends Component {
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
  async componentDidMount() {
    await this.props.getConactUsAction();
  }

  render() {
    // if(this.props.contact !== undefined ){
    //   if(this.props.contact.location != null){
    //     this.setState({
    //       longitude:this.props.contact.location.coordinates[0],
    //       latitude:this.props.contact.location.coordinates
    //     })
    //   }
      
    // }
    return (
      <>
        <Header />

        <section className="mt-5">
          <div className="container">
            <div className="d-flex">
              <h3>Support </h3>
            </div>
            {/* <div className="mapdiv mt-3"> */}
              {/* <Map
                style={style}
                center={{ 
                  lat: this.state.latitude, lng: this.state.longitude
                  // lat: (this.props.contact !== undefined  && this.props.contact)?((this.props.contact.location.coordinates[0] === null)?20.5937:this.props.contact.location.coordinates[0]):20.5937,//this.state.latitude, 
                  // lng: (this.props.contact !== undefined  && this.props.contact)?((this.props.contact.location.coordinates[1] === null)?78.9629:this.props.contact.location.coordinates[1]):78.9629
                  
                }}
                handlelatlong={(e)=>this.handlelatlong(e)}
                handleAddress={(e)=>this.handleAddress(e)}
                handlepincode={(e)=>this.handlepincode(e)}
                handlecityname={(e)=>this.handlecityname(e)}
                height='400px'
                value={((this.props.contact !== undefined && this.props.contact) ?this.props.contact.address:0)}
                // onChange={(e) => this.onChangeAddName('location', e.target.value)}
                zoom={10}
              /> */}
            {/* </div> */}
            <div style={{ marginTop: "10px" }}>
              <div>
                <h5 style={{ color: "gray" }}>Address</h5>
                <h4>{((this.props.contact !== undefined && this.props.contact) ?this.props.contact.address:'')}</h4>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <h5 style={{ color: "gray" }}>Phone Number</h5>
                <h4 style={{ color: "#2dbbab" }}>{((this.props.contact !== undefined && this.props.contact) ?this.props.contact.country_code+this.props.contact.contact_Number:"")}</h4>
              </div>
            </div>
            <div className="mt-4 mb-5">
              <div>
                <h5 style={{ color: "gray" }}>Email</h5>
                <h4 style={{ color: "#2dbbab" }}>{((this.props.contact !== undefined && this.props.contact) ?this.props.contact.email:"")}</h4>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBYy_Llmri0DhCX2KY-3SUKiCaIIrR43ZU",
// })(Google);
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
)(withSnackbar(Google));
