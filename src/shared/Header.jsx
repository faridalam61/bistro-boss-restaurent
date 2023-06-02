import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useCart from "../Hooks/useCart";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const navigate = useNavigate();
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/Salad">Order</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">Cart: {cart?.length || 0}</Link>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="navbar fixed bg-black z-20 text-white opacity-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Get started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
