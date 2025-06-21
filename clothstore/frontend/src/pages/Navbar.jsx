

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Searchbar from "./Searchbar";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NavbarMenu = [
  { id: 1, title: "HOME", path: "/" },
  { id: 2, title: "ABOUT", path: "/about" },
  { id: 3, title: "SHOP", path: "/shop" },
  { id: 4, title: "CONTACT", path: "/contact" },
];

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setTimeout(() => window.location.reload(), 2000);
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success("Login/Signup successful!");
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-white h-26 px-6 text-gray-700 flex justify-between items-center">
        <div className="text-2xl mx-16 font-bold text-gray-600">CLotH StoRE</div>

        <div className="flex mt-2 right-66 fixed">
          <ul className="flex gap-8 px-16">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="text-base font-semibold hover:text-yellow-400 transition-colors"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-2 -mt-1">
            <Searchbar />
          </div>
        </div>

        <div className="flex gap-2 mx-3">
          {!isLoggedIn ? (
            <>
              <div className="shadow-lg">
                <Signup onSignup={handleAuthSuccess} />
              </div>
              <div className="shadow-lg">
                <Login onLogin={handleAuthSuccess} />
              </div>
            </>
          ) : (
            <div>
              <FaUserCircle
                className="text-4xl cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-md">
                  <Link
                    to="/profile"
                    className="px-4 py-2 hover:bg-gray-100 flex items-center"
                    onClick={() => setShowDropdown(false)}
                  >
                    <FaUser className="mr-2" /> Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <MdLogout className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default Navbar;
