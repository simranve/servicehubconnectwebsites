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
class TrackBusinessUsersWithShortKeys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.link=this.link.bind(this);
  }
  async componentDidMount() {
    
    let data = {};
    let self = this;
    const timezone = await Intl.DateTimeFormat().resolvedOptions().timeZone;
    // this.props.match.params.id
    if (self.props != undefined && self.props.match != undefined && self.props.match.params != undefined && self.props.match.params.id != undefined) {
      var name = this.props.match.params.id
      await self.props.fetchsubCategoryBynameList(name);
      console.log(name)
      //Carpool
      navigator.geolocation.getCurrentPosition(function(position) {
        data = {
          subCategoryId:name,//,//
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          // longitude:-88.27857348227539,
        	// latitude:40.08201745156272,
          time_zone :timezone
        };
        self.props.fetchbussinessList(data)  
      });
      
      console.log("subcategoryNamelisting",this.props.bussinesslistingNew);
      
    }
  }
  render() {
    console.log(this.props.bussinesslistingNew)
    let businessCategoryTable = <div />;
    let categoryList = [];
    let stars = <div></div>
    {this.props.bussinesslistingNew.length > 0
      ? this.props.bussinesslistingNew.map(e => {
        if(e.website == ""){

        }
        else{
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
          var start_time = "";
          var end_time = "";
          var discount = "";
          if(e.bussiness_info == undefined){

          }
          else if(e.bussiness_info == "" && e.bussiness_info.happy_hours.start_time == "" && e.bussiness_info.happy_hours.end_time == "" ){

          }
          else{
            var start_hour = parseInt(e.bussiness_info.happy_hours.start_time.split(":")[0]) > 12 ?parseInt(e.bussiness_info.happy_hours.start_time.split(":")[0]) -12 : parseInt(e.bussiness_info.happy_hours.start_time.split(":")[0]) 
            var start_min = e.bussiness_info.happy_hours.start_time.split(":")[1]
            var start_am_pm = parseInt(e.bussiness_info.happy_hours.start_time.split(":")[0]) > 12 ? "PM":"AM"
            start_hour = start_hour > 9 ? start_hour:"0"+start_hour
            start_time = start_hour+":"+start_min+" "+start_am_pm;


            var end_hour = parseInt(e.bussiness_info.happy_hours.end_time.split(":")[0]) > 12 ?parseInt(e.bussiness_info.happy_hours.end_time.split(":")[0]) -12 : parseInt(e.bussiness_info.happy_hours.end_time.split(":")[0]) 
            end_hour = end_hour > 9 ? end_hour:"0"+end_hour

            var end_min = e.bussiness_info.happy_hours.end_time.split(":")[1]
            var end_am_pm = parseInt(e.bussiness_info.happy_hours.end_time.split(":")[0]) > 12 ? "PM":"AM"
            end_time = end_hour+":"+end_min+" "+end_am_pm;
            
            discount = e.bussiness_info.happy_hours.discount
          }
          var website = e.website;
          categoryList.push(
            {
              business_logo:
              <a 
              target="_blank" href={(website.indexOf("https://") == 0)?website:'https://'+website}
              // onclick={()=>this.link(e.website)} 
              ><img src={e.business_logo} className="rounded-circle mb-15" style={{height: "329px",width: "329px"}}/></a>,
              data:<a target="_blank" href={(website.indexOf("https://") == 0)?website:'https://'+website}>
                <div className="carpoolContent" style={{ borderRight: "1px solid #999", flex: 1 }} >
                  <div>
                      <p>Happy Hours</p>
                      <span>{start_time} - {end_time}</span>
                      <div className="ratingBox">{discount}%</div>
                  </div>
                    
                  <h3>{e.bussiness_name}</h3>
                  {/* <p>{e.business_owner_name}</p> */}
                  <p>{e.description}</p>
                  <p>{e.local_city}</p>
                  {/* <p>{e.bussiness_email}</p> */}
                  <p>Contact Number {e.country_code} {e.mobile_no}</p>
                  <p>
                    
                    <div>{stars}</div>
                  </p>
                  <p>
                    <span>
                        {
                          (e.business_weekdays != undefined?
                          ((new Date()).getDay() == 1)?(e.business_weekdays.is_monday_Open?"Opened":"Closed"):
                          ((new Date()).getDay() == 2)?(e.business_weekdays.is_tuesday_Open?"Opened":"Closed"):
                          ((new Date()).getDay() == 3)?(e.business_weekdays.is_wednesday_Open?"Opened":"Closed"):
                          ((new Date()).getDay() == 4)?(e.business_weekdays.is_thursday_Open?"Opened":"Closed"):
                          ((new Date()).getDay() == 5)?(e.business_weekdays.is_friday_Open?"Opened":"Closed"):
                          ((new Date()).getDay() == 6)?(e.business_weekdays.is_saturday_Open?"Opened":"Closed"):
                          (e.business_weekdays.is_sunday_Open?"Opened":"Closed")
                          :"Closed")
  
                        }
                    </span>
                    <div className ="button_box"><button type="button" class="btn btn-danger">Order or Book Now</button></div>
                  </p>
  
                </div>
              </a>
              }
          )
        }
        
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
            <div className='table-responsive'>
              {businessCategoryTable}
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    bussinesslistingNew: state.bussiness.bussinesslistingNew,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchbussinessList: (data) => dispatch(actions.fetchbussinessListNameAction(data)),
    fetchsubCategoryBynameList: (data) => dispatch(actions.fetchsubCategoryBynameListAction(data)),
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(TrackBusinessUsersWithShortKeys));