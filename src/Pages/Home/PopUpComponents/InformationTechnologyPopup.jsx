import React from 'react';
import './Style.css';

function InformationTechnologyPopup() {
  return (
    <>
     <div id="informationTechnologyPopup" className='fadeIn'>
        <div className="popupHeader">
            <h1>IT/ITes</h1>
            The IT/ITes sector and exports have propelled the growth of services sector in many geographies, making them the preferred offshore development destination. The IT industry hires millions of new employees/contractors every year. This sector needs to be well prepared to adhere to the Governance, Risk, and Compliance requirements that new age international engagements demand. To safeguard the interests of clients, accountability of its employees is of the highest importance, and BGV has become a standard across the industry.
        </div>
        <div className="popupDescription" style={{padding:"15px 20px"}}>
            <div className="row descRow" style={{display:"flex"}}>
                <div className="descIcon pull-left" style={{width:"5%"}}>
                <i className="material-icons" >assignment</i>
                </div>
                <div className="pull-left descText" style={{width:"90%"}}>
                    <b>Who to verify:</b>
                    <br />
                    Software development engineers, QA engineers, database and network administrators, client support staff, project managers, other employees.
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
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Highest Education verification </li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Professional reference check</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Global database check (for senior executives)</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Credit history check</li>
                        <li type="disc" style={{background:"none",padding:"0px",margin:"0px"}}>Drug test (5/7/9 panel) (as per client need)</li>
                    </ul>
                </div>
            </div>
        </div>
     </div>  
    </>
  )
}

export default InformationTechnologyPopup;
