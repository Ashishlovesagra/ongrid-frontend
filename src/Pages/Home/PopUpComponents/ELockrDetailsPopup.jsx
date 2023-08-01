import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

function ELockrDetailsPopup() {
  return (
    <>
     <div id="eLockrDetailsPopup" className='fadeIn'>
        <div className="popupHeader hoverButton">
            <div style={{display:"flex"}}>
            <span>
                    <h1 style={{fontSize:"35px"}}>eLockr for issuing employment credentials to ex-employees</h1>
                </span>
                <span>
                    <Link to="/bookDemo" className='bookOnGridDemo'>
                        <span>Book a demo</span>
                    </Link>
                </span>
            </div>
        </div>
        <div className="popupDescription" style={{padding:"15px 30px"}}>
            <div className="col-md-12">
                <p style={{fontSize:"20px"}}>eLockr is a free platfrom for employers to issue employment credentials to ex-employees and ex-contractors</p>
            </div>
            <div className="col-md-12 d-flex">
            <div className="col-md-6" style={{paddingRight:"50px"}}>
                <div className="pull-left descText">
                    <ul className='ul'>
                        <li className='li'>Empower your ex-employees and ex-contractors by issuing digital employment credentials</li>
                        <li className='li'>Outsource your ex-employee verification process while earning credits!</li>
                        <li className='li'>Gain useful insights into attrition</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6" style={{paddingRight:"50px"}}>
                <div className="pull-left descText">
                    <ul className='ul'>
                        <li className='li'>Facilitate instant verification, done digitally</li>
                        <li className='li'>Build accountability through 65+ standardized reference tags</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="pull-left">
                <p style={{fontSize:'20px'}}>To learn more, visit <Link style={{textDecoration:"none"}} to="https://elockr.io/#/" target='_blank'>eLockr</Link></p>
            </div>
        </div>
        </div>
     </div> 
    </>
  )
}

export default ELockrDetailsPopup;
