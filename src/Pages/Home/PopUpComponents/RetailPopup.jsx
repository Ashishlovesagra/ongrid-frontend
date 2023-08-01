import React from 'react';
import './Style.css';

function RetailPopup() {
  return (
    <>
      <div id="retailPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>Retail, Hospitality, F&B</h1>
            As we step into the new decade, the Retail, Hospitality, and F&B sector have not only grown but evolved to justify the 21st-century aspiration and pallette! The beauty of the industry involves an intimate experience delivered to its stakeholders thus living up to the term hospitality. Considering that each member of the workforce represents your brand, hiring and retaining a thorough breed of professionals becomes critical. Therefore, BGV is a common and accepted norm across the industry.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Corporate staff, retail store executives, cashiers, front office executives, room service staff, supervisors and team leads, chefs, kitchen staff, waiters and servers, other employees and contractors
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>eLockr reference check (for the blue-collar and grey-collar workforce)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Drug test (5/7/9 panel) (for workforce handling food and other edible inventory)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default RetailPopup;
