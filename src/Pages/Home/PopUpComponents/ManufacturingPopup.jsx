import React from 'react';
import './Style.css';

function ManufacturingPopup() {
  return (
    <>
     <div id="manufacturingPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Manufacturing</h1>
            In addition to the compliances required to run a manufacturing setup, the sector has always been vulnerable to falling prey to incidents of destructive herd mentality. Therefore, it becomes critical to mitigate the risk through the BGV of the workforce, especially those working in factories, plants, and production lines.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Assembly line workforce (permanent and contractual), shop floor executives, other workers in factories and plants, corporate office employees
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Police verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Prior employment verification</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest education verification (for white-collar workforce)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check</li>
                    </ul>
                </div>
            </div>
        </div>
     </div>  
    </>
  )
}

export default ManufacturingPopup;
