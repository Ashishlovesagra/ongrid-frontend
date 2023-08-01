import React from 'react';
import './Style.css';


function StaffingPopup() {
  return (
    <>
     <div id="staffingPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Staffing</h1>
            The staffing industry has been at the forefront of a paradigm shift with respect to the way employees are hired and deployed. With the aspect of long-term full-time employment being actively replaced with freelancing and temporary stints, more and more organizations (clients) rely on staffing companies for their staff needs. At the same time, these organizations are looking for verified people to be deployed at their sites. Staffing companies can not only reduce risk through background verification but also use it as a differentiator to win client contracts.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Blue-collar workers (eg. security guards, delivery boys, warehouse staff), Grey-collar workers (sales executives, field operations executives, tele-callers)
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>ID verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Address verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Criminal and court record verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Police verification (for client site compliance needs)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Prior employment verification (as per client need)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest education verification (as per client need)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default StaffingPopup;
