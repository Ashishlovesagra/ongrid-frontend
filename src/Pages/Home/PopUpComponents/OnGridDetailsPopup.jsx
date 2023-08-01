import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

function OnGridDetailsPopup() {
  return (
    <>
     <div id="onGridDetailsPopup" className='fadeIn'>
        <div className="popupHeader hoverButton">
            <div style={{display:"flex"}}>
                <span>
                    <h1 style={{fontSize:"35px"}}>Digital, Real-Time or Near Real-Time</h1>
                </span>
                <span>
                    <Link to="/bookDemo" className='bookOnGridDemo'>
                        <span>Book a demo</span>
                    </Link>
                </span>
            </div>
        </div>
        <div className="popupDescription d-flex" style={{padding:"15px 30px"}}>
            <div className="col-md-6" style={{paddingRight:"50px"}}>
                <div className="pull-left descText">
                    <ul className='ul'>
                        <li className='li'>OnGrid background verification serving 2000+ organizations for higher trust and accountability</li>
                        <li className='li'>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification, address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks, bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc.</li>
                        <li className='li'>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6" style={{paddingRight:"50px"}}>
            <div className="pull-left descText">
                <ul className='ul'>
                    <li className='li'>Provision for self-registration by candidate, facilitating digital collection of details, documents and consent, thereby reducing effort of the HR / Operations team.</li>
                    <li className='li'>Data and document security ensured through encryption methodologies, role based access, and adherence to regulatory requirements.</li>
                    <li className='li'>Basic checks require no document, with bulk verification format and options for large-scale hiring.</li>
                    <li className='li'>Prior employment verification</li>
                    <li className='li'>Real-time status through reports and dashboards. Interim reports available as and when checks get completed.</li>
                </ul>
            </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default OnGridDetailsPopup;
