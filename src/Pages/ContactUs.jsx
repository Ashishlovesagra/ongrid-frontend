import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import phone from '../assets/phone.svg';

function ContactUs() {
  const [verified, setVerified] = useState(false);

  //reCaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }

  return (
    <>
      <div>
        <div id="careers">
          <section id="careers-header">
            {/* <div className="careerDiv1"></div> */}
            <div className="contactDiv2"></div>
            <h1>Contact us</h1>
          </section>
          <section style={{ marginBottom: "30px" }}>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <div
                  className="row"
                  style={{ backgroundColor: "#f1f1f1", marginTop: "30px" }}
                >
                  <div
                    className="col-md-12"
                    style={{ padding: "20px", height: "550px" }}
                  >
                    <h3 style={{ textAlign: "center" }}>
                      Business Enquiry? Bugs? Catch up for tea?
                    </h3>
                    <br />
                    <form action="" name="feedbackForm">
                      <div
                        className="row justify-content-md-center"
                        style={{ paddingTop: "20px" }}
                      >
                        <div className="col-md-10">
                          <div className="bottomMargin">
                            <div className="input-container">
                              <input
                                id="name"
                                className="input"
                                type="text"
                                placeholder=" "
                                required
                              />
                              <div className="cut" />
                              <label htmlFor="name" className="placeholder">
                                Name*
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row justify-content-md-center"
                        style={{ paddingTop: "20px" }}
                      >
                        <div className="col-md-5">
                          <div className="bottomMargin">
                            <div className="input-container">
                              <input
                                id="email"
                                className="input"
                                type="text"
                                placeholder=" "
                                required
                              />
                              <div className="cut" />
                              <label htmlFor="email" className="placeholder">
                                Email*
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="bottomMargin">
                            <div className="input-container">
                              <input
                                id="phone"
                                className="input"
                                type="text"
                                placeholder=" "
                                required
                              />
                              <div className="cut" />
                              <label htmlFor="phone" className="placeholder">
                                Phone*
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row justify-content-md-center"
                        style={{ paddingTop: "20px" }}
                      >
                        <div className="col-md-10">
                          <div className="bottomMargin">
                            <div className="input-container">
                              <input
                                id="query"
                                className="input"
                                type="text"
                                placeholder=" "
                                required
                              />
                              <div className="cut" />
                              <label htmlFor="query" className="placeholder">
                                Please enter your query here...*
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center" style={{ marginTop: "20px" }}>
                        <div className="d-flex justify-content-center col-md-10">
                        <div className="col-md-12 d-flex justify-content-center" style={{textAlign:"center",marginTop:"10px"}}>
                          <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                          />
                        </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: "20px" }}>
                        <div
                          className="col-md-12"
                          style={{ marginTop: "10px", textAlign: "center" }}
                        >
                          <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={!verified}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                    <div className="col-md-12" style={{marginTop:"10px"}}>
                        <h3>Address</h3>
                        <div id="address" style={{marginBottom:"30px"}}>
                            <h5 style={{margin:"0px"}}>Handy Online Solutions Private Limited</h5>
                            <span>ThinkPlus, 18B, Institutional Area</span>
                            <br />
                            <span>
                            Opposite Eli Lilly and Company
                            <br />
                            Sector 32, Gurugram, Haryana
                            </span> - <span>122003</span>
                            <br />
                            <span style={{marginTop:"0px"}}>
                            <img src={phone} style={{height:"25px",marginRight:"10px",opacity:"0.54"}} alt="" />
                            <a href="tel:+91 80470 94800" style={{textDecoration:"none"}}><span >080470 94800</span></a>
                            </span>
                            <br />
                            <div>
                                <img src="https://ongrid.in/images/businessInquiries.svg" style={{height:"25px",marginRight:"10px",opacity:"0.54"}} alt="" />
                                <span>Business Inquiries - </span>
                                <span>
                                    <a href="mailto:partner@ongrid.in" style={{textDecoration:"none"}}>partner@ongrid.in</a>
                                </span>
                            </div>
                            <div>
                                <img src="https://ongrid.in/images/platformSupport.svg" style={{height:"25px",marginRight:"10px",opacity:"0.54"}} alt="" />
                                <span>Platform Support - </span>
                                <span>
                                    <a href="mailto:support@ongrid.in" style={{textDecoration:"none"}}>support@ongrid.in</a>
                                </span>
                            </div>
                            <div>
                                <img src="https://ongrid.in/images/applyToOngrid.svg" style={{height:"25px",marginRight:"10px",opacity:"0.54"}} alt="" />
                                <span>Apply to OnGrid - </span>
                                <span>
                                    <a href="mailto:careers@ongrid.in" style={{textDecoration:"none"}}>careers@ongrid.in</a>
                                </span>
                            </div>
                            <div>
                                <img src="https://ongrid.in/images/feedback.svg" style={{height:"25px",marginRight:"10px",opacity:"0.54"}} alt="" />
                                <span>Feedback - </span>
                                <span>
                                    <a href="mailto:feedback@ongrid.in" style={{textDecoration:"none"}}>feedback@ongrid.in</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div style={{overflow:"hidden",height:"270px"}}>
                            <div id="googlemap" style={{height:"270px",position:"relative",overflow:"hidden"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.046392054422!2d77.03733517554623!3d28.448017875766045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1872871970cd%3A0x29a35131333be0ed!2sOnGrid%20-%20Background%20verification%20platform!5e0!3m2!1sen!2sin!4v1686198416472!5m2!1sen!2sin" width={378} height={270} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
