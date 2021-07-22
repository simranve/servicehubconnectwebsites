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

export default function Header() {
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
            <button
              type="button"
              data-toggle="collapse"
              href="#"
              data-target=".collapse"
              role="button"
              className="btn button-collapse  mt-3 "
              style={{ marginLeft: "60px" }}
            >
              <img src={menu} style={{ height: "40px" }} />
            </button>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item header-nav">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item header-nav">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item header-nav">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item header-nav">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Sign Up
              </a>
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
            </li>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
