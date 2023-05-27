import React, { useContext } from "react";
import loginImg from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    login(email, pass)
      .then((res) => navigate("/"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="hero min-h-screen bg-white mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <img src={loginImg} className="w-1/2" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/registration">Sign up here</Link>
              </p>
            </div>
          </form>
          <Helmet>
            <title>Bistro boss | Login</title>
          </Helmet>
        </div>
      </div>
    </div>
  );
}

export default Login;
