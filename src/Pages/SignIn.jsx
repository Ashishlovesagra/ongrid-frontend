import React, { useState } from "react";
import "../StyleSheets/About.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../ContextApi/Auth";
import axios from "axios";
import { toast } from "react-hot-toast";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth();
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ongrid-backend.vercel.app/api/auth/login",
        {email, password }
      );
      console.log(res.data.message)
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    };
  return (
    <>
      <div>
        <div id="signUp">
          <section>
            <div className="container" style={{ marginTop: "100px" }}>
              <div className="row">
                <div
                  className="col-md-offset-2 col-md-8 col-xs-12"
                  id="pageHeader"
                >
                  <h1>Sign-in on OnGrid</h1>
                  View, Add, Manage individuals in your community
                </div>
              </div>
              <form onSubmit={handleSubmit}>
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
                              id="password"
                              className="input"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="password" className="placeholder">
                              Password*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-12" style={{textAlign:"center"}}>
                            <button className="btn btn-primary" type="submit" style={{width:"186px",backgroundColor:"rgb(51,204,204)"}}>Sign In</button>
                            <br />
                            OR
                            <br />
                            <img src="https://ongrid.in/images/google-signin-button.png" alt="" style={{height:"46px"}} />
                        </div>
                    </div>
                    <div className="row text-center" style={{marginTop:"30px"}}>
                        <Link to="/forgotPassword" style={{textDecoration:"none",color:"#34d0d0"}}>Forgot Password</Link>
                        <br />
                        <Link to="/register" style={{textDecoration:"none",color:"#34d0d0"}}>Don't have an account? Register Here</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
  }

export default SignIn;
