import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";

import rating from "../../assets/images/rating_on_ic.png";
// export default function TrackBusinessUsers() {
class TrackBusinessUsers extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    
    let data = {}
    let self = this
    if (self.props != undefined && self.props.location != undefined && self.props.location.aboutProps != undefined && self.props.location.aboutProps.name != undefined) {
      var name = self.props.location.aboutProps.name
      navigator.geolocation.getCurrentPosition(function(position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        data = {
          subCategoryId:name,
          // latitude:position.coords.latitude,
          // longitude:position.coords.longitude,
          longitude:-88.27857348227539,
        	latitude:40.08201745156272,
          day:(new Date()).getDay()
        };
        self.props.fetchbussinessList(data)  
      });
      
    }
  }
  render() {
    const Data = this.props.bussinesslisting;
    return (
      <>
        <Header />

        <section className="mt-5 mb-5">
          <div className="container">
            <div className="d-flex mb-3">
              {/* <h3 className="uprheadng">Dashboard / Ride Share / Location / </h3>
              <h3 className="txtBlk"> Carpool</h3> */}
              <h3 className="txtBlk">Professional Listing</h3>
            </div>

            {Data.length > 0 ? Data.map((e) => (
              <a target="_blank" href={e.website}>
                <div className="shadowCont mt-12">
                  <div className="row px-12">
                    <div className="col-sm-12 d-flex align-items-center">
                      <div className="carpoolImage">
                        <img src={e.business_logo} />
                      </div>
                        <div
                            className="carpoolContent"
                            style={{ borderRight: "1px solid #999", flex: 1 }}
                        >
                            <h3>{e.bussiness_name}</h3>
                            <p>{e.business_owner_name}</p>
                            <p>{e.local_city}</p>
                            <p>{e.bussiness_email}</p>
                            <p>Contact Number {e.country_code} {e.mobile_no}</p>
                            <p>
                              <img
                                src={rating}
                              />{" "}
                              <span>{e.businessRating} Star Rating</span>
                            </p>
                            

                        </div>
                    </div>
                  </div>
                </div>
              </a>
            )):<div>No Data Found</div>}
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    bussinesslisting: state.bussiness.bussinesslisting,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchbussinessList: (data) => dispatch(actions.fetchbussinessListAction(data)),
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(TrackBusinessUsers));