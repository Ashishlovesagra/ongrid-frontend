import React from 'react';
import './Style.css';


function OnDemandPopup() {
  return (
    <>
     <div id="onDemandPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Education/EdTech</h1>
            With the rise in demand, organizations in the Education and EdTech sector are on a hiring spree. The primary users of your service or platform are students, and their safety and learning outcomes are of paramount importance. BGV thus ensures the quality of new hires - tutors, administrative staff, or sales staff, thus helping towards a productive and safe learning environment.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Teachers and Tutors, administrative staff, field sales staff, other employees
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Prior employment verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest education verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check (for field sales staff)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default OnDemandPopup;
