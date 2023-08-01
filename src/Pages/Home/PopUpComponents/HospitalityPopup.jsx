import React from 'react';
import './Style.css';


function HospitalityPopup() {
  return (
    <>
      <div id="hospitalityPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Banking, Financial Services, Insurance and Fin-Tech</h1>
            Banking, Financial Services, and Insurance sector has gone through a decade of exponential growth with rapid innovation in technology (the rise of fintech) and rise in per capita income of the consumers. This period of unprecedented growth has been accompanied with ever increasing compliance and regulatory burden, especially given the employee access to highly sensitive financial data. This brings in its own source of challenges where the accountability of workforce is of supreme importance especially.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Engineering and technical staff, branch staff, cashiers, field executives, sales advisors, supervisors, other employees
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest Education verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Professional reference check (for white-collar workforce)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check (for field executives and sales advisors)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Credit history check (for senior executives)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Global database check (for senior executives)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default HospitalityPopup;
