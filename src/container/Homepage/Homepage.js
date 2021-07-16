import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Login from "../Login";
import Signup from "../Signup";

export default function Homepage() {
  return (
    <>
      <Header />

      <section className="mt-5">
        <div className="container">
          <h1>Dashboard</h1>

          <div className="dashItemCont mt-4">
            <div className="dashItem">
              <Link to="/rideshare">
                <img src={require("../../assets/images/ride_share_ic.png")} />
                <h3>Ride Share</h3>
              </Link>
            </div>
            <div className="dashItem" style={{ background: "#fef7da" }}>
              <a href="">
                <img
                  src={require("../../assets/images/restuarant_delivery_ic.png")}
                />
                <h3 style={{ color: "#f9c10e" }}>Restaurant Delivery Only</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fee7db" }}>
              <a href="">
                <img src={require("../../assets/images/restaurant_ic.png")} />
                <h3 style={{ color: "#e85529" }}>
                  Restaurant (Online Odering)
                </h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#f0ddfe" }}>
              <a href="">
                <img src={require("../../assets/images/grocery_ic.png")} />
                <h3 style={{ color: "#9415fb" }}>Grocery / Product Delivery</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#e7e4ff" }}>
              <a href="">
                <img src={require("../../assets/images/product_ic.png")} />
                <h3 style={{ color: "#b5b1d9" }}>Grocery & Product Store</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fdd5fe" }}>
              <a href="">
                <img
                  src={require("../../assets/images/other_delivery_service_ic.png")}
                />
                <h3 style={{ color: "#91288f" }}>Other Delivery Service</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#ffd6e6" }}>
              <a href="">
                <img
                  src={require("../../assets/images/vehicle_movement_services_ic.png")}
                />
                <h3 style={{ color: "#ee478c" }}>Vehicle Movement Services</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#d9ffd0" }}>
              <a href="">
                <img src={require("../../assets/images/automotive_ic.png")} />
                <h3 style={{ color: "#56a940" }}>
                  Automative/Auto Repair/Equipement Rental
                </h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fefbd0" }}>
              <a href="">
                <img src={require("../../assets/images/home_help_ic.png")} />
                <h3 style={{ color: "#c1b000" }}>Home Help/Business Help</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#d1fbff" }}>
              <a href="">
                <img
                  src={require("../../assets/images/home_maintenace_ic.png")}
                />
                <h3 style={{ color: "#00a0ae" }}>
                  Home Maintenance & Remodeling
                </h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#ffe7c8" }}>
              <a href="">
                <img src={require("../../assets/images/health_hair_ic.png")} />
                <h3 style={{ color: "#fcb040" }}>
                  Health/Hair salon/Beauty salon
                </h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#ffd5e9" }}>
              <a href="">
                <img src={require("../../assets/images/wedding_ic.png")} />
                <h3 style={{ color: "#ec84b5" }}>Wedding/Events/Party</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#d3e4ff" }}>
              <a href="">
                <img
                  src={require("../../assets/images/onlie_tutoring_ic.png")}
                />
                <h3 style={{ color: "#5c87c6" }}>Online Tutoring</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#ffe0d6" }}>
              <a href="">
                <img src={require("../../assets/images/business_ic.png")} />
                <h3 style={{ color: "#f25962" }}>Business</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fdd5fe" }}>
              <a href="">
                <img
                  src={require("../../assets/images/financiial_advicing_ic.png")}
                />
                <h3 style={{ color: "#91288f" }}>Financial Advicing</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#eaffc9" }}>
              <a href="">
                <img
                  src={require("../../assets/images/graphic_design_ic.png")}
                />
                <h3 style={{ color: "#4b721c" }}>Graphic design & Writing</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#f0ddfe" }}>
              <a href="">
                <img
                  src={require("../../assets/images/other_service_ic.png")}
                />
                <h3 style={{ color: "#9415fb" }}>Other Services</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#ddf0ff" }}>
              <a href="">
                <img
                  src={require("../../assets/images/other_online_services_ic.png")}
                />
                <h3 style={{ color: "#1d9dfc" }}>Other Online Services</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fef7da" }}>
              <a href="">
                <img src={require("../../assets/images/rental_ic.png")} />
                <h3 style={{ color: "#fcb040" }}>Rental</h3>
              </a>
            </div>
            <div className="dashItem" style={{ background: "#fef7da" }}>
              <a href="">
                <img src={require("../../assets/images/rental_ic.png")} />
                <h3 style={{ color: "#fcb040" }}>Rental</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  );
}
