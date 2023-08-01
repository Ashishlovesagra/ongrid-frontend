import React from 'react';
import './Style.css';


function LogisticsAndTransportationPopup() {
  return (
    <>
      <div id="logisticsAndTransportationPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Transportation, Logistics, eCommerce</h1>
            With the adoption of high-technology in the supply chain sector, the industry has involuntarily become a massive driver of change, especially in developing economies. With delivery boys and warehouse staff handling high-value inventory, engaging with end customers at their doorsteps, or ferrying passengers, having an accountable workforce is not just desirable, but also necessary.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Drivers, delivery boys, warehouse staff, field executives, supervisors, distribution center workforce, other employees
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest Education verification (for the white-collar workforce)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check (for the field, warehouse, and distribution center staff)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Traffic violation check (for staff directly involved in transportation)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default LogisticsAndTransportationPopup;
