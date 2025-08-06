import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-500 hover:text-blue-400"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-500 hover:text-blue-400"
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold underline"
                  : "text-gray-500 hover:text-blue-400"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline"
              : "text-gray-500 hover:text-blue-400"
          }
          to="/support"
        >
          Support
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold underline"
                  : "text-gray-500 hover:text-blue-400"
              }
              to="/allproducts"
            >
              All Products
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    const cartItems = stored ? JSON.parse(stored) : [];
    setCartCount(cartItems.length);

    const storedWish = localStorage.getItem("wishItems");
    const wishItems = storedWish ? JSON.parse(storedWish) : [];
    setWishCount(wishItems.length);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("user signOut successfully");
        toast.success('Successfully signOut.')
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="shadow-md bg-violet-700 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            GadgetHaven
          </Link>
        </div>

        {/* Center: Nav Items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>

        {/* Right: Icons */}
        <div className="navbar-end gap-2 sm:gap-4">
          {/* Cart Button */}
          <button className="btn btn-ghost btn-circle relative">
            <FaCartArrowDown className="text-xl sm:text-2xl" />
            {cartCount > 0 && (
              <span className="badge badge-xs sm:badge-sm absolute -top-1 -right-1 sm:top-0 sm:right-0 bg-red-600 text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Wishlist Button */}
          <button className="btn btn-ghost btn-circle relative">
            <TbJewishStar className="text-xl sm:text-2xl" />
            {wishCount > 0 && (
              <span className="badge badge-xs sm:badge-sm absolute -top-1 -right-1 sm:top-0 sm:right-0 bg-red-600 text-white">
                {wishCount}
              </span>
            )}
          </button>

          {user ? (
            <a className="hover:cursor-pointer" onClick={handleSignOut}>
              SignOut
            </a>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
