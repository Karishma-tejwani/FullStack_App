import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setName] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const val = { username, password };
    console.log(val);

    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(val),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("Invalid details");
    } else {
      alert("Login Successfully!");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form className="mt-5">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassord" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={loginUser} className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
