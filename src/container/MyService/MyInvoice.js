import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ButtonGroup } from "reactstrap";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import Footer from "../Footer";
import ReactStars from "react-rating-stars-component";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import TextField from "@material-ui/core/TextField";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
export default function CarpoolDetail() {
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3>My Invoice</h3>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="shadowCont mt-4">
                <div className="">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item mt-2" role="presentation">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Upcoming
                      </a>
                    </li>
                    <li class="nav-item mt-2" role="presentation">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content mt-4" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="shadowContt">
                        <div className="p-4">
                          <h5>
                            <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                            123456789456
                          </h5>

                          <hr />
                          <div className=" d-flex align-items-center">
                            <div className="carpoolImage">
                              <img
                                src={require("../../assets/images/image_two.png")}
                              />
                            </div>

                            <div className="carpoolContent">
                              <h4>Professional Name</h4>
                              <h5>Business Name</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadowCont mt-2">
                <div className="p-4">
                  <h5>
                    <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                    123456789456
                  </h5>

                  <hr />
                  <div className=" d-flex align-items-center">
                    <div className="carpoolImage">
                      <img src={require("../../assets/images/image_two.png")} />
                    </div>

                    <div className="carpoolContent">
                      <h4>Professional Name</h4>
                      <h5>Business Name</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
            <div className="col">
              <div className="shadowCont mt-4">
                <div className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="carpoolImage">
                      <img src={require("../../assets/images/image_two.png")} />
                    </div>

                    <div className="carpoolContent">
                      <h4>Professional Name</h4>
                      <h5>Business Name</h5>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5>
                        <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                        123456789456
                      </h5>
                    </div>{" "}
                    <div>
                      <h5>
                        <span style={{ color: "grey" }}>Payment Method:-</span>{" "}
                        Card
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5>
                        <span style={{ color: "grey" }}>Total Amount:-</span>{" "}
                        $60.00
                      </h5>{" "}
                    </div>
                    <div>
                      <h5 style={{ color: "#2dbbab" }}>Order Placed</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadowCont mt-2">
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Service </h4>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="col-sm-1 align-items-center ">
                      <div class="form-check mt-3 ">
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm">
                      <h6 style={{ color: "gray" }}>
                        Customer location point A
                      </h6>

                      <h5>New Delhi, India, 12345</h5>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="col-sm-1 align-items-center ">
                      <div class="form-check mt-3 ">
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm">
                      <h6 style={{ color: "gray" }}>
                        Customer location point A
                      </h6>

                      <h5>New Delhi, India, 12345</h5>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="col-sm-1 align-items-center ">
                      <div class="form-check mt-3 ">
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />{" "}
                      </div>
                    </div>
                    <div className="col-sm">
                      <h6 style={{ color: "gray" }}>
                        Customer location point A
                      </h6>

                      <h5>New Delhi, India, 12345</h5>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-sm-1 align-items-center ">
                      <div class="form-check mt-3 ">
                        <LocationOnIcon
                          style={{
                            color: "#2dbbab",
                            marginRight: "10px",
                            marginLeft: "-25px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm">
                      <h6 style={{ color: "gray" }}>
                        Customer location point A
                      </h6>

                      <h5>New Delhi, India, 12345</h5>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total service</h5>
                    <h5>$25.0</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Happy hour Discount</h5>
                    <h5>$00.0</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Promo code Discount</h5>
                    <h5>$2.50</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Item</h5>
                    <h5>$22.50</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Service Tax</h5>
                    <h5>$00.0</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Tip</h5>
                    <h5>$10.00</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Waiting Time</h5>
                    <h5>$0.00</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Gross Total</h5>
                    <h5>$32.50</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>All Service Fee</h5>
                    <h5>$3.00</h5>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center ovrttl">
                    <h5>Overall Total</h5>
                    <h5>$32.50</h5>
                  </div>
                  <hr />
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
