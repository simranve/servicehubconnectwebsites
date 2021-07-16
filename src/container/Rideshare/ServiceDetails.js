import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { ButtonGroup } from "reactstrap";
import Calendar from "react-calendar";
import Header from "../Header";
import Footer from "../Footer";
import "react-calendar/dist/Calendar.css";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function CarpoolDetail() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Header />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="d-flex mb-3">
            <h3 className="uprheadng">
              Dashboard / Ride Share / Location / Carpool / Business Name /
            </h3>
            <h3 className="txtBlk"> Service Details</h3>
          </div>

          <div className="row">
            <div className="col shadowCont px-4 py-3">
              <div>
                <h4>October 2020</h4>
              </div>
              <div>
                <Calendar onChange={onChange} value={value} />
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <Button variant="outlined" className="timbtn">
                  10:45 AM
                </Button>
                <Button variant="outlined" className="timbtnn">
                  11:45 AM
                </Button>
                <Button variant="outlined" className="timbtnn">
                  12:45 AM
                </Button>
                <Button variant="outlined" className="timbtnn">
                  01:45 PM
                </Button>
              </div>
              <hr />
              <div>
                <textarea
                  class="form-control txtdiv"
                  aria-label="With textarea"
                  placeholder="Add notes if any"
                ></textarea>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/coupon_ic.png")}
                    style={{ height: "35px", marginRight: "35px" }}
                  />

                  <h4 className="dtlBtmCtn align-items-center mt-2">
                    APPLY COUPON
                  </h4>
                </div>
                <div>
                  <img
                    src={require("../../assets/images/next_ic.png")}
                    style={{ height: "25px" }}
                  />
                </div>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#afaeae" }}>Tip Amount</h5>
                <div className="d-flex tipdiv justify-content-between align-items-center">
                  <ButtonGroup style={{ alignSelf: "stretch" }}>
                    <Button className="btntip">10%</Button>

                    <Button className="btntipp">20%</Button>
                    <Button className="btntipp">30%</Button>
                  </ButtonGroup>{" "}
                  <input
                    type="text"
                    class="form-control inputtip"
                    placeholder="Enter custom amount."
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h6 className="dtetmg">Start Date:-</h6>
                  <h5 className="dtlBtmCtn"> 20th April,2021</h5>
                </div>
                <div className="d-flex align-items-center">
                  <h6 className="dtetmg">Finish Date:-</h6>
                  <h5 className="dtlBtmCtn"> 21th April,2021</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <h6 className="dtetmg">Start Time:-</h6>
                  <h5 className="dtlBtmCtn"> 10:00 AM</h5>
                </div>
                <div className="d-flex align-items-center">
                  <h6 className="dtetmg">Finish Time:-</h6>
                  <h5 className="dtlBtmCtn"> 13:00 AM</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div className="col shadowCont px-4 py-3">
              <div>
                <h4>Service</h4>
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
                  <h6 style={{ color: "gray" }}>Customer location point A</h6>

                  <h5 className="dtlBtmCtn">New Delhi, India, 12345</h5>
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
                  <h6 style={{ color: "gray" }}>Customer location point A</h6>

                  <h5 className="dtlBtmCtn">New Delhi, India, 12345</h5>
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
                  <h6 style={{ color: "gray" }}>Customer location point A</h6>

                  <h5 className="dtlBtmCtn">New Delhi, India, 12345</h5>
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
                  <h6 style={{ color: "gray" }}>Customer location point A</h6>

                  <h5 className="dtlBtmCtn">New Delhi, India, 12345</h5>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Total service</h5>
                <h5>$25.0</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">Happy hour Discount</h5>
                <h5 className="dtlBtmCtn">$00.0</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">Promo code Discount</h5>
                <h5 className="dtlBtmCtn">$2.50</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Total Item</h5>
                <h5>$22.50</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">Service Tax</h5>
                <h5 className="dtlBtmCtn">$00.0</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">Tip</h5>
                <h5 className="dtlBtmCtn">$10.00</h5>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">Waiting Time</h5>
                <h5 className="dtlBtmCtn">$0.00</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Gross Total</h5>
                <h5>$32.50</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="dtlBtmCtn">All Service Fee</h5>
                <h5 className="dtlBtmCtn">$3.00</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center ovrttl">
                <h5>Overall Total</h5>
                <h5>$32.50</h5>
              </div>
              <hr />

              <div>
                <h5>Payment</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    {" "}
                    <div
                      class="form-check mt-3"
                      style={{ marginRight: "15px" }}
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
                    <h4 className="dtlBtmCtn">
                      Card Card{" "}
                      <span style={{ color: "gray" }}>( Stripe payment )</span>
                      <br />
                      <span style={{ color: "gray" }}>xxxx xxx xxxx 1321</span>
                    </h4>
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      style={{
                        color: "#2dbbab",

                        border: "2px solid #2dbbab",
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <div class="form-check mt-1 " style={{ marginRight: "15px" }}>
                    <input
                      class="form-check-input position-static"
                      type="radio"
                      name="blankRadio"
                      id="blankRadio1"
                      value="option1"
                      aria-label="..."
                    />{" "}
                  </div>

                  <h4 className="dtlBtmCtn">
                    Cash{" "}
                    <span style={{ color: "gray" }}>( Will nor show up )</span>
                  </h4>
                </div>
                <div className="d-flex mt-4">
                  <div class="form-check mt-1 " style={{ marginRight: "15px" }}>
                    <input
                      class="form-check-input position-static"
                      type="radio"
                      name="blankRadio"
                      id="blankRadio1"
                      value="option1"
                      aria-label="..."
                    />{" "}
                  </div>

                  <h4 className="dtlBtmCtn">
                    Cheque{" "}
                    <span style={{ color: "gray" }}>( Will nor show up )</span>
                  </h4>
                </div>

                <div className="mt-4">
                  <h5 className="dtlBtmCtnn" style={{ lineHeight: "1.7rem" }}>
                    (A Cancellation Fee is assessed for any service cancelled
                    less than 24 hours before the appointment time. No refund
                    will be given if the service is cancelled after the service
                    provider cilck READY TO WORK. Applicable insurance is the
                    responsibility of the service provider.)
                  </h5>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "#2dbbab",
                      fontWeight: "bold",
                      padding: "15px 70px",
                      border: "2px solid #2dbbab",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    Order Now
                  </Button>
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
