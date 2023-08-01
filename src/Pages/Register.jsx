import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ongrid, setOngrid] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://ongrid-backend.vercel.app/api/auth/register", {
        name,
        email,
        phone,
        ongrid,
        password,
        answer,
      });
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
  return (
    <>
      <div>
        <div id="signUp">
          <section>
            <div className="container" style={{ marginTop: "50px" }}>
              <div className="row">
                <div
                  className="col-md-offset-2 col-md-8 col-xs-12"
                  id="pageHeader"
                >
                  <h1>Register on OnGrid</h1>
                </div>
              </div>
              <form onSubmit={handleSubmit} name="register">
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
                              id="name"
                              className="input"
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="password" className="placeholder">
                              Name*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="email"
                              className="input"
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
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
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="password"
                              className="input"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
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
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="phone"
                              className="input"
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="phone" className="placeholder">
                              Phone*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="answer"
                              className="input"
                              type="text"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="answer" className="placeholder">
                              What is your Best Friend Name?*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-12">
                        <div className="bottomMargin">
                          <div className="input-container">
                            <input
                              id="ongird"
                              className="input"
                              type="text"
                              value={ongrid}
                              onChange={(e) => setOngrid(e.target.value)}
                              placeholder=" "
                              required
                            />
                            <div className="cut" />
                            <label htmlFor="ongrid" className="placeholder">
                              How did you learn about OnGrid?*
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div
                        className="col-md-12"
                        style={{ textAlign: "center" }}
                      >
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{
                            width: "186px",
                            backgroundColor: "rgb(51,204,204)",
                          }}
                        >
                          Sign In
                        </button>
                        <br />
                        OR
                        <br />
                        <img
                          src="https://ongrid.in/images/google-signin-button.png"
                          alt=""
                          style={{ height: "46px" }}
                        />
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
  );
}

export default Register;
