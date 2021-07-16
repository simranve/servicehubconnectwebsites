import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Rideshare() {
  return (
    <>
      <Header />

      <section className="mt-5">
        <div className="container">
          <div className="d-flex">
            <h3 className="uprheadng">Dashboard / </h3>
            <h3 className="txtBlk"> Ride Share</h3>
          </div>

          <div className="shadowCont mt-4 mb-5">
            <div className="rideboxCont">
              <div className="ridebox">
                <Link to="/carpool">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Carpool</h3>
                </Link>
              </div>
              <div className="ridebox">
                <a href="">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Regular Car Ride</h3>
                </a>
              </div>
              <div className="ridebox">
                <a href="">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Suv Ride / Van Ride</h3>
                </a>
              </div>
              <div className="ridebox">
                <a href="">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Executive Ride</h3>
                </a>
              </div>
              <div className="ridebox">
                <a href="">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Motorcycle Ride</h3>
                </a>
              </div>
              <div className="ridebox">
                <a href="">
                  <img src={require("../../assets/images/carpool_image.png")} />
                  <h3>Taxi Ride</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
