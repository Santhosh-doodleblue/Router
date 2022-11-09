import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleNav = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="eren bg-dark">
        <div className="container text-white text-center">
          <div className="row d-inline">
            <div className="col-md-12">
              <h1 className="mt-5 mb-3 ">Want to join Scouts?</h1>
              <h4 className="mb-5">Apply here</h4>
              <form autoComplete="off">
                <input
                  className="mb-3"
                  type={"email"}
                  name="email"
                  placeholder="   Your Email ...."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
                <br></br>

                <input
                  className="mb-5"
                  type={"password"}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
                  placeholder="   Your Password ...."
                ></input>
                <br></br>
                <button className="join px-4" onClick={handleNav}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
