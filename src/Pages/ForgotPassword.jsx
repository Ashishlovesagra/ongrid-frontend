import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ongrid-backend.vercel.app/api/auth/forgot-password",
        { email, newPassword,answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/sign-in");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //reCaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true)
  }

  return (
    <>
    <div>
        <div id="signUp">
            <section>
                <div className="container" style={{marginTop:"100px"}}>
                    <div className="row">
                    <div
                  className="col-md-offset-2 col-md-8 col-xs-12"
                  id="pageHeader"
                >
                  <h1>Forgot Password?</h1>
                </div>
                    </div>
                    <form onSubmit={handleSubmit} name="forgotForm">
                        <div className="row">
                        <div
                    className="col-md-offset-2 col-md-8 col-xs-12"
                    id="pageContent"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="email"
                              className="input"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="email" className="placeholder">
                              Email*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="newPassword"
                              className="input"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              type="password"
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="newPassword" className="placeholder">
                              New Password*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="answer"
                              className="input"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              type="text"
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="answer" className="placeholder">
                              What is your best Friend Name*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-12 d-flex justify-content-center" style={{textAlign:"center",marginTop:"30px"}}>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                          />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-12 text-center" style={{marginTop:"20px"}}>
                        <button className="btn btn-primary" type="submit" disabled={!verified} style={{backgroundColor:"rgb(51,204,204)"}}>Submit</button>
                        </div>
                    </div>
                  </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword;
