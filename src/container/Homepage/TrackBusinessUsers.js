import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";

// export default function TrackBusinessUsers() {
class TrackBusinessUsers extends React.Component {
  componentWillMount() {
    if (this.props != undefined && this.props.location != undefined && this.props.location.aboutProps != undefined && this.props.location.aboutProps.name != undefined) {
        let data = {
            subCategoryId:this.props.location.aboutProps.name
        };
        this.props.fetchbussinessList(data)
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