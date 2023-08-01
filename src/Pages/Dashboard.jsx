import React from "react";
import '../StyleSheets/About.css';
import { useAuth } from "../ContextApi/Auth";

function Dashboard() {
  const [auth] = useAuth();
  return (
    <>
      <div className="dashboard">
        <h1 className="user-h1">User Dashboard</h1>
        <div className="user-info">
          <div className="info">
            <label className="user-label" htmlFor="name">Name:</label>
            <p className="user-p" id="name">{auth?.user?.name}</p>
          </div>
          <div className="info">
            <label className="user-label" htmlFor="email">Email:</label>
            <p className="user-p" id="email">{auth?.user?.email}</p>
          </div>
          <div className="info">
            <label className="user-label" htmlFor="phone">Phone:</label>
            <p className="user-p" id="phone">{auth?.user?.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
