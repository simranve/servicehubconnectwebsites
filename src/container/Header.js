import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import menu from "../assets/images/menu_ic.png";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HomeIcon from "@material-ui/icons/Home";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import SettingsIcon from "@material-ui/icons/Settings";
import GradeIcon from "@material-ui/icons/Grade";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GroupIcon from "@material-ui/icons/Group";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import Login from "./Login";
import Signup from "./Signup";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import * as actions from "../store/actions/index";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      contents1:'',
    }
  }
  async componentWillMount() {
    await this.props.fetchpagesList({
      page:"about_us"
    });
    
  }
  
  handleSubmit = async () => {
    
    console.log(this.props)    
      await this.props.fetchpagesList({
        page:"about_us"
      });
      await this.setState({
        contents1:this.props.about.about_us
      })
    }
  render(){
    const userToken = localStorage.getItem('token')
    console.log(userToken)
    return (
      <header>
        <div className="container">
          <div className="navbar-dark  position-fixed h-100 w-sidebar navbar-collapse collapse lftside">
            <ul className="nav flex-column flex-nowrap  ulstyle">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" href="#">
                    <HomeIcon style={{ marginRight: "10px" }} />
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trackprofessional">
                  <a className="nav-link">
                    <AddLocationIcon style={{ marginRight: "10px" }} />
                    Track Professional
                  </a>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/myservice">
                  <a className="nav-link" href="#">
                    <SettingsIcon style={{ marginRight: "10px" }} />
                    My Service
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/myinvoice">
                  <a className="nav-link" href="#">
                    <LibraryBooksIcon style={{ marginRight: "10px" }} />
                    My Invoice
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/carpoollist">
                  <a className="nav-link" href="#">
                    <GradeIcon style={{ marginRight: "10px" }} />
                    My Rating & Comment
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rescheduleservice">
                  <a className="nav-link" href="#">
                    <EventNoteIcon style={{ marginRight: "10px" }} />
                    Rescheduled Service
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" href="#">
                    <GroupIcon style={{ marginRight: "10px" }} />
                    Refer Friends
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link" href="#">
                    <NotificationsIcon style={{ marginRight: "10px" }} />
                    Notification
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support">
                  <a className="nav-link" href="#">
                    <SupervisedUserCircleIcon style={{ marginRight: "10px" }} />
                    Supports
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings">
                  <a className="nav-link" href="#">
                    <SettingsApplicationsIcon style={{ marginRight: "10px" }} />
                    Setting
                  </a>
                </Link>
              </li>
            </ul>
          </div>
  
          <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <div>
              <a className="navbar-brand" href="#">
                <img
                  src={require("../assets/images/logo.png")}
                  style={{ width: "120px" }}
                />
              </a>
              {/* <button
                type="button"
                data-toggle="collapse"
                href="#"
                data-target=".collapse"
                role="button"
                className="btn button-collapse  mt-3 "
                style={{ marginLeft: "60px" }}
              >
                <img src={menu} style={{ height: "40px" }} />
              </button> */}
            </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item header-nav">
                <a 
                
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal21"
                onClick={(e) => this.handleSubmit()}
                aria-current="page" 
                >
                  About Us
                </a>
                
                <div
                  className="modal fade"
                  id="exampleModal21"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      {/* Simran */}

                      <div className="row">
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header border-0">
                            <div className="row align-items-center">
                              <div className="col">
                                <div className="content" 
                                dangerouslySetInnerHTML=
                                {{__html: this.state.contents1
                                }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              </li>
              <li className="nav-item header-nav">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item header-nav">
                <a className="nav-link" href="/">
                {/* <Link to="/carpool"> */}
                  Categories
                </a>
              </li>
              {
                !userToken?
              <li className="nav-item header-nav">
                {/* <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Sign Up
                </a> */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <Signup />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>:<li></li>}
              {
                !userToken?
                
              <li className="nav-item header-nav">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal1"
              >
                Login
              </a>
              <div
                className="modal fade"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <Login />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </li>
              :<li></li>
              }
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    success: state.pages.success,
    error: state.pages.error,
    pages: state.pages.pages,
    term: state.pages.term,
    about: state.pages.about,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchpagesList: (data) => dispatch(actions.fetchpagesListAction(data)),
    addPageAction: (data1,data2) => dispatch(actions.addPage(data1,data2)),
    
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withSnackbar(Header));
