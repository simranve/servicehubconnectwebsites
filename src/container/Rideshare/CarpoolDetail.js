import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function CarpoolDetail() {
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3 className="uprheadng">
              Dashboard / Ride Share / Location / Carpool /
            </h3>
            <h3 className="txtBlk">Business Name</h3>
          </div>

          <div class="col-sm-6">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Destination Pickup Point"
            />
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
                <div className="col">
                  <div className="carpoolContent">
                    <p className="ttl">Open Time</p>
                    <p className="dtlBtmCtn">10:05AM - 12:00PM</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="carpoolContent">
                    <p className="ttl">Desription</p>
                    <p className="dtlBtmCtn">
                      My mistress' eyes are nothing like the sun; Coral is far
                      more red, than her lips red: If snow be white
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
              <div className="d-flex align-items-center">
                <div className="carpoolImage">
                  <img src={require("../../assets/images/image_two.png")} />
                </div>

                <p className="dtlBtmCtn">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit, sed do
                  <br /> eiusmod tempor incididunt ut labore
                </p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col mt-3">
                    <div className="d-flex">
                      <div
                        class="form-check mt-1 "
                        style={{ marginRight: "5px" }}
                      >
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />{" "}
                      </div>
                      <p className="cusloctn">Customer Location Point A</p>
                      <div className="ml-5" style={{ marginLeft: "30px" }}>
                        <nav aria-label="Page navigation example ">
                          <ul
                            class="pagination"
                            style={{ borderRadius: "10px" }}
                          >
                            <li class="page-item lftitm">
                              <a
                                class="page-link"
                                href="#"
                                aria-label="Previous"
                                style={{
                                  backgroundColor: "#2dbbab",
                                  color: "white",
                                  height: "40px",
                                }}
                              >
                                <RemoveIcon style={{ width: "15px" }} />
                              </a>
                            </li>

                            <li class="page-item">
                              <a
                                class="page-link"
                                href="#"
                                style={{ color: "#2dbbab", height: "40px" }}
                              >
                                4
                              </a>
                            </li>

                            <li class="page-item">
                              <a
                                class="page-link"
                                href="#"
                                aria-label="Next"
                                style={{
                                  backgroundColor: "#2dbbab",
                                  color: "white",
                                  height: "40px",
                                }}
                              >
                                <AddIcon style={{ width: "15px" }} />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div
                        class="form-check mt-1 "
                        style={{ marginRight: "5px" }}
                      >
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />{" "}
                      </div>
                      <p className="cusloctn">Point B</p>
                    </div>
                    <div className="d-flex">
                      <div
                        class="form-check mt-1 "
                        style={{ marginRight: "5px" }}
                      >
                        <input
                          class="form-check-input position-static"
                          type="radio"
                          name="blankRadio"
                          id="blankRadio1"
                          value="option1"
                          aria-label="..."
                        />
                      </div>
                      <p className="cusloctn">Point C</p>
                    </div>
                    <div className="d-flex">
                      <div class=" mt-1 ">
                        <LocationOnIcon
                          style={{
                            color: "#2dbbab",
                            marginRight: "10px",
                            marginLeft: "-5px",
                          }}
                        />
                      </div>
                      <p className="cusloctn">Destination</p>
                    </div>
                  </div>

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
                              style={{ marginTop: "-7px", marginLeft: "-2px" }}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="d-flex ">
                        <p style={{ marginRight: "17px" }}>
                          Total Service Time
                        </p>

                        <p style={{ marginRight: "15px" }}>|</p>
                        <p style={{ marginRight: "85px" }}>1 hours 45 mins</p>
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
