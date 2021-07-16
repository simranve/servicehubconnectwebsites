import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ButtonGroup } from "reactstrap";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import Footer from "../Footer";
import TextField from "@material-ui/core/TextField";

export default function CarpoolDetail() {
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3>Rescheduled Service</h3>
          </div>
          <div className="row">
            <div className="col-md-5 ">
              <div className="shadowContt mt-4">
                <div className="p-4">
                  <div>
                    <h5>
                      <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                      123456789456
                    </h5>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center">
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
              <div className="shadowCont mt-2">
                <div className="p-4">
                  <div>
                    <h5>
                      <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                      123456789456
                    </h5>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center">
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
              <div className="shadowCont mt-2">
                <div className="p-4">
                  <div>
                    <h5>
                      <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                      123456789456
                    </h5>
                  </div>
                  <hr />
                  <div className="d-flex align-items-center">
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
                    <div className="d-flex">
                      <img
                        src={require("../../assets/images/email_ic.png")}
                        style={{
                          marginRight: "10px",
                          marginLeft: "80px",
                          width: "60px",
                          cursor: "pointer",
                        }}
                      />
                      <img
                        src={require("../../assets/images/chat_ic.png")}
                        style={{
                          marginRight: "10px",
                          cursor: "pointer",
                          width: "60px",
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h5>
                      <span style={{ color: "grey" }}>Next date:-</span> 29 Oct
                      2021
                    </h5>
                  </div>
                  <hr />
                  <div>
                    <h5>
                      <span style={{ color: "grey" }}>Next time:-</span> 11:00AM
                      To 12:00AM
                    </h5>
                  </div>
                  <div className="d-flex mt-5">
                    <div className="col d-flex justify-content-center">
                      <Button
                        variant="outlined"
                        style={{
                          color: "black",
                          backgroundColor: "rgb(222 222 222)",
                          fontWeight: "bold",
                          border: "1px solid #f8f8f8",
                          borderRadius: "10px",
                          padding: "5px 40px",
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <Button
                        variant="outlined"
                        style={{
                          color: "white",
                          backgroundColor: "#2dbbab",
                          fontWeight: "bold",
                          border: "1px solid #f8f8f8",
                          borderRadius: "10px",
                          padding: "10px 50px",
                        }}
                      >
                        Accept
                      </Button>
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
