import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <span className="footerHeader">Connect with us</span>
                    <br />
                    <a href="https://www.facebook.com/OnGridIndia/" target="_blank">
                        <img className="socialIcons" src="https://ongrid.in/images/home/facebook.png" alt="" />
                    </a>
                    <a href="https://twitter.com/On_grid" target="_blank">
                        <img className="socialIcons" src="https://ongrid.in/images/home/twitter.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/ongrid.in/?trk=top_nav_home" target="_blank">
                        <img className="socialIcons" src="https://ongrid.in/images/home/linkedin.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/ongrid_bgv/" target="_blank">
                        <img className="socialIcons" src="https://ongrid.in/images/home/instagram.png" alt="" />
                    </a>
                </div>
                <div className="col-md-3">
                    <span className="footerHeader">Company</span>
                    <br />
                    <Link to="/aboutUs" className="otherControl">About Us</Link>
                    <br />
                    <Link to="/careers" className="otherControl">Careers</Link>
                    <br />
                    <Link to="/contact" className="otherControl">Contact us</Link>
                    <br />
                    <Link to="/our-blog" className="otherControl">Our Blog</Link>
                    <br />
                    <Link to='/term-and-conditions' className="otherControl">Terms and conditions</Link>
                    <br />
                    <Link to="/privacyPolicy" className="otherControl">Privacy Policy</Link>
                </div>
            </div>
            <hr className="footerHr" />
            <span className="companyName">© <span className="year">2023 </span>ONGRID - Website Clone By Ashish Singh</span>
        </div>
    </div>
    </>
  )
}

export default Footer;
