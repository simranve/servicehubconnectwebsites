import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "60%",
  height: "50%",
  borderRadius: "22px",

  border: "1px solid #CECECE",
  "@media(max-Width: 768px)": {
    width: "100% !important",
    marginBottom: "20px !important",
  },
};
class Google extends Component {
  render() {
    return (
      <>
        <Header />

        <section className="mt-5">
          <div className="container">
            <div className="d-flex">
              <h3>Support </h3>
            </div>
            <div className="mapdiv mt-3">
              <Map google={this.props.google} zoom={10} style={style}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />
              </Map>
            </div>
            <div style={{ marginTop: "150px" }}>
              <div>
                <h5 style={{ color: "gray" }}>Address</h5>
                <h4>New Delhi, India 12453</h4>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <h5 style={{ color: "gray" }}>Phone Number</h5>
                <h4 style={{ color: "#2dbbab" }}>+91 99999 99999</h4>
              </div>
            </div>
            <div className="mt-4 mb-5">
              <div>
                <h5 style={{ color: "gray" }}>Email</h5>
                <h4 style={{ color: "#2dbbab" }}>johndoe@gmail.com</h4>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBYy_Llmri0DhCX2KY-3SUKiCaIIrR43ZU",
})(Google);
