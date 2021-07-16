import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { ButtonGroup } from "reactstrap";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import Footer from "../Footer";
import ReactStars from "react-rating-stars-component";
import TextField from "@material-ui/core/TextField";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
const style = {
  width: "37%",
  height: "40%",
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

        <section className="mt-5 mb-5">
          <div className="container">
            <div className="d-flex mb-3">
              <h3>Track Professional</h3>
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
              <div className="col">
                <div className="shadowCont mt-4">
                  <div className="p-4">
                    <div className="d-flex align-items-center">
                      <div className="carpoolImage">
                        <img
                          src={require("../../assets/images/image_two.png")}
                        />
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
                            marginLeft: "20px",
                            width: "50px",
                            cursor: "pointer",
                          }}
                        />
                        <img
                          src={require("../../assets/images/chat_ic.png")}
                          style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            width: "50px",
                          }}
                        />
                        <img
                          src={require("../../assets/images/zoom_ic.png")}
                          style={{
                            width: "50px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h5>
                        <span style={{ color: "grey" }}>Service Id:-</span>{" "}
                        123456789456
                      </h5>
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
                        <h5>
                          <span style={{ color: "grey" }}>
                            Payment Method:-
                          </span>{" "}
                          Card
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadowCont mt-2">
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>Service Status</h4>

                      <div>
                        <Button
                          variant="outlined"
                          style={{
                            color: "red",

                            border: "2px solid red",
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-1 align-items-center">
                        <div class="circle" style={{ marginTop: "15px" }}></div>
                        <div className="vlline"></div>
                        <div
                          class="circlee  "
                          style={{ marginTop: "40px" }}
                        ></div>
                      </div>
                      <div className="col-sm align-items-center mt-2">
                        <h5>Service Place (20 April 2021, 2:30PM)</h5>
                        <h5 style={{ marginTop: "20px" }}>
                          Customer must cancel less than 24 hours before
                          appointment time, (Full Refund Less than transaction
                          fee)
                        </h5>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="shadowCont mt-2">
                  <div className="p-4">
                    <div>
                      <h4>Map</h4>
                    </div>
                    <div className="mapdiv"></div>
                  </div>
                </div>
                <div className="shadowCont mt-2">
                  <div className="p-4">
                    <h4 style={{ color: "grey" }}>
                      How would you rate your experience the{" "}
                      <span style={{ color: "#2dbbab" }}>
                        service provider.
                      </span>
                    </h4>
                    <div className="mt-4">
                      <h4>Rating Service Man</h4>
                    </div>
                    <div className="d-flex   align-items-center">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#2dbbab"
                        classNames="react-stars-wrapper-09326191143378553"
                      />
                    </div>
                    <div className="mt-4">
                      <h4>Customer Comment</h4>
                      <div className="custmrcmntdiv ">
                        <textarea
                          class="form-control custmrcmnt "
                          aria-label="With textarea"
                          placeholder="Write here...."
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <Button
                        variant="outlined"
                        style={{
                          color: "#2dbbab",
                          padding: "10px 150px",
                          border: "2px solid #2dbbab",
                          borderRadius: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Submit Rating
                      </Button>
                    </div>
                    <div className="mt-4">
                      <div>
                        <h5 className="dtlBtmCtn">Tip After Service</h5>
                        <div className="d-flex tipdiv justify-content-between align-items-center">
                          <ButtonGroup style={{ alignSelf: "stretch" }}>
                            <Button className="btntip">$ 5</Button>

                            <Button className="btntipp">$ 10</Button>
                            <Button className="btntipp">$ 15</Button>
                          </ButtonGroup>{" "}
                          <input
                            type="text"
                            class="form-control inputtip"
                            placeholder="Enter custom amount."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <Button
                        variant="outlined"
                        style={{
                          color: "white",
                          backgroundColor: "#2dbbab",
                          padding: "10px 150px",
                          border: "2px solid #2dbbab",
                          borderRadius: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Complete
                      </Button>
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
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBYy_Llmri0DhCX2KY-3SUKiCaIIrR43ZU",
})(Google);
