import React from 'react';
import "../StyleSheets/About.css";

function Careers() {
  return (
    <>
     <div id="careers">
          <section id="careers-header">
            {/* <div className="careerDiv1"></div> */}
            <div className="careerDiv2"></div>
            <h1>Brighten Your Future!</h1>
          </section>
          <section>
          <div className="container" style={{ padding: "30px 5px 40px 5px" }}>
            <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center aboutMargin">
            <h1 style={{ marginBottom: "25px" }}>Explore opportunities with us!</h1>
            We are a team of individuals with diverse backgrounds and expertise, all driven with a common purpose of enabling secure and digital transactions in a modern and growing India, with an opportunity to help millions of Indians access services easily, meet their aspirations, and provide upward mobility in society. All playing different yet significant roles, all working fervently towards creating better user experiences, all driven with a thirst for innovation. And in that dynamic, fast-paced community is a cornucopia of opportunities, for you. Pick a team, find your opportunity and get in touch with us.
            </div>
            </div>
          </div>
          </section>
          <section style={{ padding: "30px 0px", backgroundColor: "#f1f1f1" }}>
            <div className="container" style={{ padding: "0px" }}>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 aboutMargin">
                  <h1 className='text-center' style={{marginBotto:"25px"}}>Current Openings</h1>
                  <h4>Currently, there are no open positions.</h4>
                  However, please write to OnGrid with your profile if you are interested to be a part of the OnGrid journey.
                  <div className='text-center' style={{backgroundColor:"#3b3b3b",marginTop:"50px"}}>
                    <h3 style={{padding:"20px 0px",color:"#fff"}}>Send your CV to <a className="linkText" href="mailto:careers@ongrid.in"> partner@ongrid.in</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
     </div>
    </>
  )
}

export default Careers;
