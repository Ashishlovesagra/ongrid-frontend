import React from 'react';
// import '../StyleSheets/about.css';
import { Link } from 'react-router-dom';

function BookDemo() {
  return (
    <>
    <div style={{overflowX:"hidden"}}>
     <section style={{background:"transparent linear-gradient(180deg, #6FD0D1 0%, #6FD0D1 15%, #FAFAFA 100%) 0% 0% no-repeat padding-box",height:"500px"}}>
        <div className="row">
            <div className="col-sm-offset-1 col-md-2" style={{margin:"1% 7%"}}>
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src="https://ongrid.in/images/home/logo/logo_white.png" style={{width:"100%",height:"50px",objectFit:"contain"}} alt="" />
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-offset-1 col-md-5" style={{marginLeft:"10%"}}>
                <div className="row inner-container">
                    <div className="col-md-11" style={{paddingTop:"10px"}}>
                        <h1 className='white' style={{marginTop:"0px",fontSize:"24px",fontWeight:"600"}}>Ensure HR compliance across organisation</h1>
                        <ul>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>Clients can send invites to candidates for self registration and creating their record, reducing HR/Ops work significantly.</li>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>
                            Integration of the client user/customer onboarding system or HRMS with OnGrid APIs.
                            </li>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>
                            Pick and choose from 50+ verifications and background checks across staff categories.
                            </li>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>
                            Reduced TAT and cost of background verifications, basic verification in less than 4 hours, including instant checks.
                            </li>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>
                            Employee onboarding, covering digital collection of data, documents, and consent.
                            </li>
                            <li style={{fontSize:"14px",marginBottom:"7px"}}>
                            Trusted by 2000+ clients.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>
     </section>
     <section>
        <div className="row">
            <div className="col-sm-offset-1 col-md-5" style={{marginLeft:"10%"}}>
                <div className="row" style={{margin:"5% 0%"}}>
                    <div className="col-md-11" style={{paddingTop:"10px"}}>
                        <h4 style={{marginBottom:"1.5rem",fontWeight:"bolder"}}>Incredible companies working with OnGrid</h4>
                        <div className="row">
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/unacademy.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/grofers.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/reliance.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/nobroker.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/delhivery.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                            <div className="col-md-4" style={{margin:"2% 0%"}}>
                                <img src="https://ongrid.in/images/home/logo/ola.png" style={{width:"100%",height:"55px",objectFit:"contain"}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5 sales-form">
                <div className="row">
                    <div className="col-md-12">
                        <iframe src="https://share.hsforms.com/1YGoK_ryqSFio_KlsthAMiwntnrz" style={{width:"603px",height:"735px"}} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
     </section>
     </div>
    </>
  )
}

export default BookDemo;
