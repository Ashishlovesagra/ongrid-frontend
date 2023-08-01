import React from "react";
import "../StyleSheets/About.css";

function AboutUs() {
  return (
    <>
      <div>
        <div id="careers">
          <section id="careers-header">
            {/* <div className="careerDiv1"></div> */}
            <div className="careerDiv2"></div>
            <h1>About Us</h1>
          </section>
          <section>
            <div className="container" style={{ padding: "30px 5px 40px 5px" }}>
              <div className="row ">
                <div className="col-md-offset-2 col-md-8 text-center aboutMargin">
                  <h3 style={{ marginBottom: "25px" }}>How it all began</h3>
                  <span style={{ color: "#44484a" }}>
                    OnGrid was established in 2015 with the vision of catalyzing
                    trust and accountability in communities with a trust
                    deficit. Our philosophy is to enable individuals and
                    organizations to engage in a frictionless manner in a
                    high-trust environment by facilitating data-driven decisions
                    that go beyond fact-checking.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section style={{ padding: "30px 0px", backgroundColor: "#f1f1f1" }}>
            <div className="container" style={{ padding: "0px" }}>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 text-center aboutMargin">
                  <h3>Where we are</h3>
                  <span>
                    OnGrid is a reputed name in the space of trust establishment
                    via background verification and checks, having served over
                    2000+ clients across multiple industries, and having
                    completed over 100 million checks. We continue to grow at a
                    rapid pace, as we introduce new solutions such as
                    <a
                      className="linkText"
                      href="https://elockr.io/#/"
                      target="_blank"
                    >
                      {" "}
                      eLockr
                    </a>{" "}
                    and <b>Gridlines</b> for making trust establishment and
                    verifications faster, cheaper, and more accurate.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section style={{ padding: "30px 0px" }}>
            <div className="container" style={{ padding: "0px" }}>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 text-center aboutMargin">
                  <h3>Our team</h3>
                  <span>
                    Our team comprises of passionate people across engineering,
                    product management, operations, business development and
                    account management, who are committed to solving the
                    trust-deficit problem in a manner that is elegant, and easy
                    to adopt for our clients. We are a team of 200+ full-time
                    employees and 1000+ contractual field verifiers. We are
                    constantly hiring, and if you wish to be a part of our team,
                    give us a shout at
                    <a
                      className="linkText"
                      href="mailto:careers@ongrid.in"
                      target="_blank"
                    >
                      {" "}
                      careers@ongrid.in
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section style={{ padding: "30px 0px", backgroundColor: "#f1f1f1" }}>
            <div className="container" style={{ padding: "0px" }}>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 text-center aboutMargin">
                  <h3>Our core values</h3>
                  <span>
                  1. Be the gatekeepers to authenticity, and protect the truth.
                  <br />
                  2. Creating a fair working world, devoid of fraud.
                  <br />
                  3. Empower the less privileged to achieve upward mobility.
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default AboutUs;
