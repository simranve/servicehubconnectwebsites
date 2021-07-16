import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function CarpoolList() {
  const Data = [1, 2, 3, 4];
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3 className="uprheadng">Dashboard / Ride Share / Location / </h3>
            <h3 className="txtBlk"> Carpool</h3>
          </div>

          <div class="col-sm-6">
            <input
              type="text"
              class="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Destination Pickup Point"
            />
          </div>

          {Data.map(() => (
            <Link to="carpooldetail">
              <div className="shadowCont mt-4">
                <div className="row px-4">
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="carpoolImage">
                      <img src={require("../../assets/images/image_two.png")} />
                      <div className="carpoolImgCtnt">
                        <div>
                          <p>Happy Hours</p>
                          <span>07:05PM, 11:00PM</span>
                        </div>
                        <div className="ratingBox">20%</div>
                      </div>
                    </div>
                    <div
                      className="carpoolContent"
                      style={{ borderRight: "1px solid #999", flex: 1 }}
                    >
                      <h3>John Doe</h3>
                      <p>Purpose</p>
                      <p>Cities of operation</p>
                      <p>
                        Minimum Cost:- <span>$250</span>
                      </p>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="carpoolContent">
                      <p>
                        <img
                          src={require("../../assets/images/comments_ic.png")}
                        />{" "}
                        <span>2.3K Comments</span>
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/rating_ic.png")}
                        />{" "}
                        <span>4.5</span> (2.2 Rating)
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/check_ic.png")}
                        />{" "}
                        <span>Background Check</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        Yes/Cleared
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/licence_ic.png")}
                        />{" "}
                        <span>Trade Licence</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        N/A
                      </p>
                    </div>
                  </div>
                  <div className="col d-flex">
                    <div className="carpoolContent">
                      <p>
                        <img
                          src={require("../../assets/images/insurance_ic.png")}
                        />{" "}
                        <span>Insurance</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        N/A
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/cerrtificate_ic.png")}
                        />{" "}
                        <span>Certificate</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        N/A
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/licence_ic.png")}
                        />{" "}
                        <span>Driver Licence/State ID</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        N/A
                      </p>
                      <p>
                        <img
                          src={require("../../assets/images/insurec_ic.png")}
                        />{" "}
                        <span>Commercial Insured</span>{" "}
                        <img src={require("../../assets/images/correct.png")} />{" "}
                        N/A
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
