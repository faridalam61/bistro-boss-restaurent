import React, { useContext } from "react";
import login from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

function Registration() {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, pass, name, photo);
    createUser(email, pass)
      .then((res) => navigate("/"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="hero min-h-screen bg-white mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
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
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign Up"
                />
              </div>
              <p>
                Already have an account? <Link to="/login">Sign in here</Link>
              </p>
            </div>
          </form>
          <Helmet>
            <title>Bistro boss | Sign up</title>
          </Helmet>
        </div>
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default Registration;
