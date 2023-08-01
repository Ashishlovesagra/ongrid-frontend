import React from 'react';
import './Style.css';

function HealthcarePopup() {
  return (
    <>
      <div id="healthcarePopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Healthcare</h1>
            Healthcare industry globally will continue to grow with improving health seeking behavior and growing concerns for personal health among the general population. An impetus to this has been witnessed due to COVID-19, with a higher demand for testing done from the comforts of home. Provided the nature of work in the sector where there is a close engagement of the staff with service seekers, at home or in hospitals and clinics, and staff having access to highly sensitive medical data as well as drugs, BGV is essential to avoid any unforeseen situations.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Doctors, nursing and paramedical staff, laboratory technicians, phlebotomists, front-office staff, other employees.
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest Education verification (including medical diploma)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check (for nursing staff, phlebotomists, laboratory technicians)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Drug test (5/7/9 panel) (for pharmacy and other staff handling drug inventory)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default HealthcarePopup;
