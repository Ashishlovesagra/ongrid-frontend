import React, { useEffect, useState } from "react";
import "../../StyleSheets/Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";

function Home() {
  const [modal,setModal]=useState(false);
  const [id,setId]=useState();

  function handleCloseModal(){
    setModal(false);
  };

  function handlePop(id){
    setId(id);
    setModal(true);
  };
  
  return (
    <>
      <section className="home-container">
        <div className="intro-text">
          <h1>DIGITAL TRUST PLATFORM</h1>
          Empowering employers and service providers through comprehensive
          identity and background
          <br />
          verifications for ensuring trust and accountability, and for achieving
          HR/ISO compliance.
          <br />
          <br />
          <Link to="/sign-in" className="nav-item">
            {" "}
            <button className="btn btn-primary btn-lg" style={{backgroundColor:"rgb(51,204,204)"}}>GET STARTED</button>{" "}
          </Link>
        </div>
      </section>
      <section className="OnGrid">
        <div className="container text-center pb-1">
          <p className="longPara">
            Millions of people are a step away from entering the formal digital
            economy. They will need access to formal services such as jobs,
            education, healthcare, loans, insurance products, house/vehicle on
            rent, etc. This transformation is possible with employers and
            service providers being able to establish trust through identity and
            background verifications. OnGrid offers 50+ background checks, and
            also leverages a repository of verified information in a secure
            locker, with the consent of an individual, for achieving this.
          </p>
        </div>
      </section>
      <section id="whyOngrid">
        <div className="container text-center">
          <h1>Why OnGrid</h1>
          <div className="smallbar"></div>
          <p>
            OnGrid is the fastest growing ISO-certified digital platform for
            background verifications and checks, serving over 2000+ clients, and
            having run over 100 million checks. OnGrid's advanced methodologies
            and proprietary algorithms across 50+ checks brings what you are
            really expecting from your BGV partner - high efficacy and accuracy,
            lesser TAT, lesser cost, and hassle-free experience for HR/TA or
            operations managers running the verification process.
          </p>
          <div className="row text-start hidden-xs hidden-sm WhyOnGrid">
            <div className="col-md-4">
              <div className="secondaryColour" id="leveragesAadhaar">
                <img
                  src="https://ongrid.in/images/home/leverage.png"
                  alt=""
                  className="laverageImg"
                />
                <br />
                <b className="heading">Cutting edge approach</b>
                <ul className="customBullet">
                  <li>State-of-art portal and APIs</li>
                  <li>Pick and choose checks</li>
                  <li>
                    Digital candidate file created for compliance and audit
                  </li>
                  <li>Multi-modal information exchange options</li>
                  <li>Multi-modal consent options</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="primaryColour" id="comprehensive">
                <b className="heading">Comprehensive and Customizable</b>
                <br />
                Verification Solutions
                <br />
                <ul className="customBullet">
                  <li>ID and address verification</li>
                  <li>Education and Employment verification</li>
                  <li>Reference Checks</li>
                  <li>Police and Court record verification</li>
                  <li>Global database checks, credits checks</li>
                  <li>CV validation, eLockr reference checks</li>
                  <li>Another 40+ checks to choose from</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="carousel slide carousel-fade" style={{zIndex:"0"}}>
                <div className="carousel-inner">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://ongrid.in/images/home/whyOngridConstructor.jpg"
                      alt="First slide"
                      id="plumber"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://ongrid.in/images/home/whyOngridFactoryWorker.jpg"
                      alt="Second slide"
                      id="bricks"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://ongrid.in/images/home/whyOngridWaiter.jpg"
                      alt="Third slide"
                      id="carpenter"
                    />
                  </Carousel.Item>
                </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-start hidden-xs hidden-sm">
            <div className="col-md-3">
              <div className="row" style={{marginLeft:"-11px"}}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block  extra"
                      src="https://ongrid.in/images/home/Armed-Vip-Security-Guards.png"
                      alt="First slide"
                      id="security"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block  extra"
                      src="https://ongrid.in/images/home/whyOngridArchitect.jpg"
                      alt="Second slide"
                      id="construction"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block  extra"
                      src="https://ongrid.in/images/home/housekeeping.jpg"
                      alt="Third slide"
                      id="housekeeping"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="row m-0">
                <div id="integrate" className="primaryColour">
                  <img
                    src="https://ongrid.in/images/home/integrate.png"
                    className="laverageImg"
                    alt=""
                  />
                  <br />
                  <b>Partner of choice, fastest to reach</b>
                  <br />
                  <ul className="customBullet">
                    <li>10 million+ people verified</li>
                    <li>100 million+ checks conducted</li>
                    <li>2000+ happy clients</li>
                    <li>50+ configurable offerings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="https://ongrid.in/images/home/whyOngridTaxiDriver.jpg"
                      alt="First slide"
                      id="flipkart"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="https://ongrid.in/images/home/whyOngridCashier.jpg"
                      alt="Second slide"
                      id="cab"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="https://ongrid.in/images/home/whyOngridEngineer.jpg"
                      alt="Third slide"
                      id="dabbawala"
                    />
                  </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-5">
              <div className="row" style={{ marginBottom: "10px" , marginLeft:"0px" }}>
                <div className="col-md-12" style={{ padding: "0px 5px" }}>
                  <div className="secondaryColour" id="crowdsourced">
                    <img
                      src="https://ongrid.in/images/home/crowdSourced.png"
                      style={{ height: "31px" }}
                      alt=""
                    />
                    <br />
                    <b>Asset-reuse</b>
                    <br />
                    <ul className="customBullet">
                      <li>
                        Allows candidate to provide electronic consent to an
                        employer or service provider to access her/his
                        information, documents, verification reports, and
                        references
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-md-8" style={{ padding: "0px 5px" }}>
                  <div className="primaryColour" id="access">
                    <img
                      src="https://ongrid.in/images/home/access.png"
                      style={{ height: "31px" }}
                      alt=""
                    />
                    <br />
                    <b>Access, Wherever, However</b>
                    <br />
                    <ul className="customBullet">
                      <li>Unlimited organization users</li>
                      <li>
                        Intuitive portal access for real time verification
                        updates
                      </li>
                      <li>
                        Configure reports - who gets them, which reports, how
                        frequently
                      </li>
                      <li>
                        APIs for integrating with onboarding systems and HRMS
                        12X6 email and call support
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4" style={{padding:"0px 5px"}}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="https://ongrid.in/images/home/housekeeping.png"
                      alt="First slide"
                      style={{height:"250px"}}
                      id="domesticHelp"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src="https://ongrid.in/images/home/whyOngridDeliveryMan.jpg"
                      alt="Second slide"
                      id="maid"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      id="machineWorker"
                      src="https://ongrid.in/images/home/whyOngridTeacher.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="offeringsNew">
        <div className="container text-center">
            <h1>Our Offerings</h1>
            <div className="smallbar"></div>
            <p>We offer identity and background verifications for various candidates - covering employees and contractors, new users, customers, merchants, loan applicants, etc.</p>
            <div className="col-md-12 responsiveOfferings" id="popupOfferingsContainer" style={{marginBottom:"0px"}}>
                <div className="row" style={{margin:"0px"}}>
                  <div className="col-md-4">
                    <div id="onGridDetails" onClick={()=>handlePop(1)} style={{cursor:"pointer"}}>
                      <img src="https://ongrid.in/images/home/offerings-onGrid.jpg" alt="" className="offeringsCardHeight" style={{width:"98%"}}/>
                      <div className="textContainer">
                        <h5>OnGrid Background verification with choice of 50+ checks</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div id="gridlinesDetails" onClick={()=>handlePop(2)} style={{cursor:"pointer"}}>
                      <img src="https://ongrid.in/images/home/offerings-gridlines.jpg" style={{width:"98%"}} alt="" className="offeringsCardHeight" />
                      <div className="textContainer">
                        <h5>Gridlines APIs for instant ID verification, KYC and onboarding</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div id="eLockrDetails" onClick={()=>handlePop(3)} style={{cursor:"pointer"}}>
                      <img src="https://ongrid.in/images/home/offerings-eLockr.jpg" style={{width:"98%"}} alt="" className="offeringsCardHeight" />
                      <div className="textContainer">
                        <h5>eLockr for issuing employment credentials to ex-employees</h5>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
      <section id="business">
        <div className="container text-center">
          <h1>Businesses</h1>
          <div className="smallbar"></div>
          <p>OnGrid provides comprehensive background verification services that can be customized to any requirement for any industry. Every business has a different purpose for verification and compliance, and hence we offer tailor-made solutions for your unique background check needs.</p>
          <div id="popupContainer" className="col-md-12" style={{marginBottom:"0%"}}>
            <div className="row" style={{margin:"0px"}}>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="onDemand" onClick={()=>handlePop(4)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img2"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Education/EdTech</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="staffing" onClick={()=>handlePop(5)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img3"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Staffing</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="logisticsAndTransportation" onClick={()=>handlePop(6)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img4"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Transportation, Logistics, eCommerce</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:"0px"}}>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="hospitality" onClick={()=>handlePop(7)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img5"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Banking, Financial Services, Insurance and Fin-Tech</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="retail" onClick={()=>handlePop(8)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img6"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Retail, Hospitality, F&B</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="manufacturing" onClick={()=>handlePop(9)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img7"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Manufacturing</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:"0px"}}>
              <div className="col-md-4" style={{height:"200px"}} >
                <div id="informationTechnology" onClick={()=>handlePop(10)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img8"></div>
                  </div>
                  <div className="textContainer">
                    <h5>IT/ITes</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="healthcare" onClick={()=>handlePop(11)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img9"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Healthcare</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{height:"200px"}}>
                <div id="internetPlatforms" onClick={()=>handlePop(12)} style={{cursor:"pointer"}}>
                  <div>
                  <div className="onDemand-img10"></div>
                  </div>
                  <div className="textContainer">
                    <h5>Internet Platforms</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="somePeopleJustWantToWatchTheWorldBurn" style={{marginBottom:"35px"}}>
        <div className="container text-center">
          <Link to="/sign-in" >
          <button type="submit" className="btn cust-btn">GET STARTED</button>
          </Link>
        </div>
      </section>
      {modal?<Modal handleCloseModal={handleCloseModal} id={id}/>:<></>}
    </>
  );
}

export default Home;
