import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { MDBDataTable } from "mdbreact";
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
    
    let data = {};
    let self = this;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("timezone",timezone);
    if (self.props != undefined && self.props.location != undefined && self.props.location.aboutProps != undefined && self.props.location.aboutProps.name != undefined) {
      var name = self.props.location.aboutProps.name
      navigator.geolocation.getCurrentPosition(function(position) {
        data = {
          subCategoryId:name,//"6055b92178d8eb46148fb5a9",
          // latitude:position.coords.latitude,
          // longitude:position.coords.longitude,
          longitude:-88.27857348227539,
        	latitude:40.08201745156272,
        };
        self.props.fetchbussinessList(data)  
      });
      
    }
  }
  render() {
    let businessCategoryTable = <div />;
    let categoryList = [];
    let stars = <div></div>
    {this.props.bussinesslisting.length > 0
      ? this.props.bussinesslisting.map(e => {
        if(Math.floor(e.businessRating) == 0){
          stars = <div> No Stars</div>
        }
        else if(Math.floor(e.businessRating) == 1){
          stars = <div>
            <img src={rating}/>{e.businessRating} Star Rating
          </div>
        }
        
        else if(Math.floor(e.businessRating) == 2){
          stars = <div>
            <img src={rating}/>
            <img src={rating}/>{e.businessRating} Star Rating
          </div>
        }
        
        else if(Math.floor(e.businessRating) == 3){
          stars = <div>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>{e.businessRating} Star Rating
          </div>
        }
        
        else if(Math.floor(e.businessRating) == 4){
          stars = <div>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>{e.businessRating} Star Rating
          </div>
        }

        else if(Math.floor(e.businessRating) == 5){
          stars = <div>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>
            <img src={rating}/>{e.businessRating} Star Rating
          </div>
        }
        categoryList.push(
          {
            business_logo:<a target="_blank" href={e.website}><div className="carpoolImage"><img src={e.business_logo} /></div></a>,
            data:<a target="_blank" href={e.website}>
              <div className="carpoolContent" style={{ borderRight: "1px solid #999", flex: 1 }} >
                <div className="carpoolImgCtnt">
                  <div>
                    <p>Happy Hours</p>
                    <span>{e.bussiness_info.happy_hours.start_time}, {e.bussiness_info.happy_hours.end_time}</span>
                  </div>
                  <div className="ratingBox">{e.bussiness_info.happy_hours.discount}%</div>
                </div>
                <h3>{e.bussiness_name}</h3>
                <p>{e.business_owner_name}</p>
                <p>{e.local_city}</p>
                <p>{e.bussiness_email}</p>
                <p>Contact Number {e.country_code} {e.mobile_no}</p>
                <p>
                  
                  <div>{stars}</div>
                </p>
                <p>
                  <span>
                      {
                        ((new Date()).getDay() == 1)?(e.business_weekdays.is_monday_Open?"Opened":"Closed"):
                        ((new Date()).getDay() == 2)?(e.business_weekdays.is_tuesday_Open?"Opened":"Closed"):
                        ((new Date()).getDay() == 3)?(e.business_weekdays.is_wednesday_Open?"Opened":"Closed"):
                        ((new Date()).getDay() == 4)?(e.business_weekdays.is_thursday_Open?"Opened":"Closed"):
                        ((new Date()).getDay() == 5)?(e.business_weekdays.is_friday_Open?"Opened":"Closed"):
                        ((new Date()).getDay() == 6)?(e.business_weekdays.is_saturday_Open?"Opened":"Closed"):
                        (e.business_weekdays.is_sunday_Open?"Opened":"Closed")

                      }
                  </span>
                </p>

              </div>
            </a>
            }
        )
      })

      : categoryList.push(
        ['No record']
      )}
      const data = {
        columns: [
          {
            label: "Business Logo",
            field: "business_logo",
            sort: "asc",
          },
          {
            label: "Data",
            field: "data",
            sort: "asc",
          },
        ],
        rows: categoryList,
      };
  
      businessCategoryTable = (
        <MDBDataTable striped bordered hover entries={10} data={data} />
      );
    return (
      <>
        <Header />

        <section className="mt-5 mb-5">
          <div className="container">
            <div className="d-flex mb-3">
              {/* <h3 className="uprheadng">Dashboard / Ride Share / Location / </h3>
              <h3 className="txtBlk"> Carpool</h3> */}
              <h3 className="txtBlk">Business Listing</h3>
            </div>
              {businessCategoryTable}
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