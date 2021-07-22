import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "bootstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function CarpoolDetail() {
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3 className="uprheadng">Dashboard / Ride Share / Location / </h3>
            <h3 className="txtBlk">Business Name</h3>
          </div>

          <div className="shadowCont mt-4">
            <div className="p-4">
              <div className="d-flex align-items-center">
                <div className="carpoolImage">
                  <img src={require("../../assets/images/image_two.png")} />
                </div>

                <div className="carpoolContent">
                  <h3>Name of the Professional</h3>
                  <h4>Name of the Business</h4>
                  <p className="detlRat">
                    <img
                      src={require("../../assets/images/rating_on_ic.png")}
                    />{" "}
                    <span>4.5</span>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="carpoolContent">
                    <p className="ttl">Desription</p>
                    <p className="dtlBtmCtn">
                      Lorem ipsum is the dumy text....
                    </p>
                  </div>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <Link>
                    <p className="cmntLink">
                      <img
                        src={require("../../assets/images/comments_on_ic.png")}
                      />{" "}
                      <span>2.3K Comments</span>
                      <ChevronRightIcon
                        style={{ width: "40px", height: "40px" }}
                      />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadowCont mt-4">
            <div className="p-4">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Service
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link "
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Fruit
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Meat
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Vegetable
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={require("../../assets/images/orangee.jpg")}
                      style={{ width: "250px" }}
                    />

                    <div className="carpoolContent ">
                      <h3>Oranges</h3>
                      <h4>Description plus orange</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal2"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="carpoolImage">
                      <img
                        src={require("../../assets/images/mango.jpg")}
                        style={{ width: "200px", marginLeft: "20px" }}
                      />
                    </div>

                    <div className="carpoolContent ">
                      <h3>Mangoes</h3>
                      <h4>Description plus mangoes</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal3"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal3"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="col d-flex justify-content-end ">
                      <div className="col d-flex justify-content-end align-items-center ordrsmry ">
                        <div className="scndcol py-2 px-4">
                          <div className="d-flex ">
                            <p style={{ marginRight: "25px" }}>0 Products </p>
                            <p style={{ marginRight: "25px" }}>|</p>
                            <p>0</p>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "37px" }}>4 Service </p>

                            <p style={{ marginRight: "25px" }}>|</p>
                            <p style={{ marginRight: "125px" }}>$ 30.00</p>

                            <Link to="/servicedetail" className="d-flex">
                              <p style={{ color: "white" }}>Order</p>
                              <div className="chevright">
                                <ChevronRightIcon
                                  style={{
                                    marginTop: "-7px",
                                    marginLeft: "-2px",
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "17px" }}>
                              Total Service Time
                            </p>

                            <p style={{ marginRight: "15px" }}>|</p>
                            <p style={{ marginRight: "85px" }}>
                              1 hours 45 mins
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={require("../../assets/images/orangee.jpg")}
                      style={{ width: "250px" }}
                    />

                    <div className="carpoolContent ">
                      <h3>Oranges</h3>
                      <h4>Description plus orange</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal4"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal4"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="carpoolImage">
                      <img
                        src={require("../../assets/images/mango.jpg")}
                        style={{ width: "200px", marginLeft: "20px" }}
                      />
                    </div>

                    <div className="carpoolContent ">
                      <h3>Mangoes</h3>
                      <h4>Description plus mangoes</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal5"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal5"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="col d-flex justify-content-end ">
                      <div className="col d-flex justify-content-end align-items-center ordrsmry ">
                        <div className="scndcol py-2 px-4">
                          <div className="d-flex ">
                            <p style={{ marginRight: "25px" }}>0 Products </p>
                            <p style={{ marginRight: "25px" }}>|</p>
                            <p>0</p>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "37px" }}>4 Service </p>

                            <p style={{ marginRight: "25px" }}>|</p>
                            <p style={{ marginRight: "125px" }}>$ 30.00</p>

                            <Link to="/servicedetail" className="d-flex">
                              <p style={{ color: "white" }}>Order</p>
                              <div className="chevright">
                                <ChevronRightIcon
                                  style={{
                                    marginTop: "-7px",
                                    marginLeft: "-2px",
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "17px" }}>
                              Total Service Time
                            </p>

                            <p style={{ marginRight: "15px" }}>|</p>
                            <p style={{ marginRight: "85px" }}>
                              1 hours 45 mins
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="d-flex align-items-center mt-3">
                    <img
                      src={require("../../assets/images/orangee.jpg")}
                      style={{ width: "250px" }}
                    />

                    <div className="carpoolContent ">
                      <h3>Oranges</h3>
                      <h4>Description plus orange</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal6"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal6"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="carpoolImage">
                      <img
                        src={require("../../assets/images/mango.jpg")}
                        style={{ width: "200px", marginLeft: "20px" }}
                      />
                    </div>

                    <div className="carpoolContent ">
                      <h3>Mangoes</h3>
                      <h4>Description plus mangoes</h4>
                      <h3>$4.00</h3>
                    </div>

                    <div className="col d-flex justify-content-end ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal7"
                      >
                        Add
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal7"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div className="d-flex justify-content-between ">
                                <div>
                                  <h3>Food Name</h3>
                                </div>
                                <div>
                                  <h3>$4.5</h3>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Complete Meal
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Regular Fries</h5>
                                </div>
                                <div>
                                  <h6>$4.5</h6>
                                </div>
                              </div>
                              <div className="mt-3">
                                <h5 style={{ color: "green" }}>
                                  Choice of drinks
                                </h5>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Cherry</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Diet Pepsi</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Fruit Punch</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Mountain Dew</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Root Beer</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <input
                                    type="radio"
                                    aria-label="Radio button for following text input"
                                  />
                                </div>
                                <div
                                  className="mr-2"
                                  style={{ marginRight: "10px" }}
                                >
                                  <h5>Shierra Mist</h5>
                                </div>
                                <div>
                                  <h6>$0.00</h6>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between modeldiv mt-3">
                                <div>
                                  <h5>Items Total$4.70</h5>
                                </div>
                                <div style={{ cursor: "pointer" }}>
                                  <h5>Add Item</h5>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <div className="col d-flex justify-content-end ">
                      <div className="col d-flex justify-content-end align-items-center ordrsmry ">
                        <div className="scndcol py-2 px-4">
                          <div className="d-flex ">
                            <p style={{ marginRight: "25px" }}>0 Products </p>
                            <p style={{ marginRight: "25px" }}>|</p>
                            <p>0</p>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "37px" }}>4 Service </p>

                            <p style={{ marginRight: "25px" }}>|</p>
                            <p style={{ marginRight: "125px" }}>$ 30.00</p>

                            <Link to="/servicedetail" className="d-flex">
                              <p style={{ color: "white" }}>Order</p>
                              <div className="chevright">
                                <ChevronRightIcon
                                  style={{
                                    marginTop: "-7px",
                                    marginLeft: "-2px",
                                  }}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="d-flex ">
                            <p style={{ marginRight: "17px" }}>
                              Total Service Time
                            </p>

                            <p style={{ marginRight: "15px" }}>|</p>
                            <p style={{ marginRight: "85px" }}>
                              1 hours 45 mins
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
