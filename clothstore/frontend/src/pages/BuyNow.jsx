import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ExpiryDateInput from './ExpiryDateInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Size from './Size';

function BuyNow() {
  const [user, setUser] = useState({});
  const [editContact, setEditContact] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  // const userId = localStorage.getItem('id');

  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item || {};

  useEffect(() => {
  const userId = localStorage.getItem("id"); // Consistent key name
  if (!userId) {
    // navigate("/");
    return;
  }

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/users/${userId}`);
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  fetchUser();
}, []);

  const handleContactChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setUser({ ...user, address: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-center">BUY NOW!</h2>

        {/* Product Preview */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded shadow-md max-w-3xl w-full">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-64 h-80 object-cover rounded-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-xl mb-4 font-semibold text-green-600">Price: ₹{item.price}</p>
            <Size/>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 w-full max-w-2xl border-2 border-gray-300 rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Contact Info</span>
            <button
              className="text-blue-500 cursor-pointer"
              onClick={() => setEditContact(!editContact)}
            >
              Change
            </button>
          </div>
          {!editContact ? (
            <span>{user.username} {user.contact_number}</span>
          ) : (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="username"
                value={user.username || ''}
                onChange={handleContactChange}
                className="border border-gray-300 rounded px-2 py-1 w-2/3 mx-auto"
                placeholder="Name"
              />
              <input
                type="text"
                name="contact_number"
                value={user.contact_number || ''}
                onChange={handleContactChange}
                className="border border-gray-300 rounded px-2 py-1 w-2/3 mx-auto"
                placeholder="Contact Number"
              />
            </div>
          )}
        </div>

        {/* Address */}
        <div className="mt-6 w-full max-w-2xl border-2 border-gray-300 rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Shipping Address</span>
            <button
              className="text-blue-500 cursor-pointer"
              onClick={() => setEditAddress(!editAddress)}
            >
              Change
            </button>
          </div>
          {!editAddress ? (
            <span>{user.address}</span>
          ) : (
            <input
              type="text"
              value={user.address || ''}
              onChange={handleAddressChange}
              className="border border-gray-300 rounded px-2 py-1 w-2/3 mx-auto block"
              placeholder="Enter address"
            />
          )}
        </div>

        {/* Payment Section */}
        <div className="mt-6 w-full max-w-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center">Payment Method</h3>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 justify-center">
              <input type="radio" name="payment" className="cursor-pointer" />
              Debit/Credit Card
            </label>

            <div className="border border-gray-300 rounded-md p-4">
              <label className="block mb-1 text-sm">Enter Card Number *</label>
              <input
                type="text"
                className="w-full max-w-md mx-auto border border-gray-300 rounded-md p-2 text-sm"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />

              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="flex flex-col items-start">
                  <label className="text-sm">Valid Date</label>
                  <ExpiryDateInput />
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-sm mb-1">CVV *</label>
                  <input
                    type="password"
                    className="border border-gray-300 mt-2 rounded-md p-2 text-sm w-24"
                    placeholder="***"
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <button className="bg-black text-white px-6 py-2 rounded-lg">
                  Pay ₹{item.price || 450}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 justify-center">
              <input type="radio" name="payment" className="cursor-pointer" />
              Net Banking
            </label>

            <label className="flex items-center gap-2 justify-center">
              <input type="radio" name="payment" className="cursor-pointer" />
              Google / Apple Wallet
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNow;
