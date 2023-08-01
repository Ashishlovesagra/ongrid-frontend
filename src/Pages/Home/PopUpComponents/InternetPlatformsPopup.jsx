import React from 'react';
import './Style.css';

function InternetPlatformsPopup() {
  return (
    <>
      <div id="internetPlatformsPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Internet Platforms</h1>
            Modern-day internet platforms have redefined the way businesses are conducted, and customers or users are acquired. While digital distribution definitely helps in onboarding the customers or users faster, it definitely leaves the businesses susceptible to compliance risks, identity frauds, and/or banking frauds. Instant verification and/or KYC of customers or users can help in compliance adherence and risk mitigation, without adding friction to the seamless onboarding.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Customers, users, sellers, and buyers on a marketplace, merchants, service providers, platform partners
                </div>
            </div>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >add_to_photos</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Most opted verifications:</b>
                    <br />
                    <ul type="disc" style={{marginLeft:"50px",marginTop:"10px"}}>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>ID verification (using instant verification APIs)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Electronic KYC (using instant APIs)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Face-match (between a selfie-taken and face image on ID document)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Bank account verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>ID document identification using OCR technology</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Instant credit check</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default InternetPlatformsPopup;
