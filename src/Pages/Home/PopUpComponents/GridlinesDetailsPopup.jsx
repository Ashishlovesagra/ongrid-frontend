import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom';

function GridlinesDetailsPopup() {
  return (
    <>
      <div id="gridlinesDetailsPopup" className='fadeIn'>
        <div className="popupHeader hoverButton">
            <div style={{display:"flex"}}>
            <span>
                    <h1 style={{fontSize:"35px"}}>Gridlines APIs for instant ID verification, KYC and onboarding</h1>
                </span>
                <span>
                    <Link to="/bookDemo" className='bookOnGridDemo'>
                        <span>Book a demo</span>
                    </Link>
                </span>
            </div>
        </div>
        <div className="popupDescription" style={{padding:"15px 30px"}}>
            <div className="col-md-12">
                <p style={{fontSize:"20px"}}>Integrate Gridlines APIs in your mobile and web applications to instantly onboard users, customers, service providers, staff, merchants, etc.</p>
            </div>
            <div className="col-md-12 d-flex">
            <div className="col-md-6" style={{paddingRight:"50px"}}>
                <div className="pull-left descText">
                    <ul className='ul'>
                        <li className='li'>Instant ID verification and KYC APIs (Passport, PAN, Aadhaar, Voter ID, Driving Licence)</li>
                        <li className='li'>Other onboarding APIs (Instant Bank account verification, Face match, Vehicle RC verification, Credit Check, COVID vaccination verification, GST verification)</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6" style={{paddingRight:"50px"}}>
                <div className="pull-left descText">
                    <ul className='ul'>
                        <li className='li'>Simplify user onboarding, validate user details, automate trust establishment decisions such as establishing user identity, complete candidate KYC etc.</li>
                        <li className='li'>Across all APIs, Gridlines APIs ensure high accuracy, uptime, redundancy and fault tolerance</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-12" style={{marginTop:"25px"}}>
            <div className="pull-left">
                <p style={{fontSize:'20px'}}>To learn more, or to get a quote, please write to <a href="mailto:partner@ongrid.in">partner@ongrid.in</a></p>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default GridlinesDetailsPopup;
