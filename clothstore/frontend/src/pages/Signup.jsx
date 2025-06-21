import React, { useState } from 'react';
import axios from 'axios';

function Signup({ onSignup }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    contact_number: '',
    address: ''
  });

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/signup', form);
      const data = response.data;

      if (data === null) {
        alert("Email already exists");
      } else {
        localStorage.setItem("user", JSON.stringify(data)); // ✅ save user object
        localStorage.setItem("id", data.id);

        onSignup(data); // ✅ pass user data to Navbar
        alert("Signup successful!");
        document.getElementById('my_modal_8').checked = false;
      }
    } catch (error) {
      alert("Signup failed. Server error.");
    }
  };

  return (
    <div>
      <div className='py-2 -mt-2 px-4 hover:bg-base-200'>
        <label htmlFor="my_modal_8" className="rounded-none cursor-pointer">Signup</label>
      </div>

      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-80 text-black rounded-none">
          <h3 className="text-lg font-bold mx-23 mb-2">Signup</h3>
          <div className='flex flex-col items-left'>
            <span>Username</span>
            <input type="text" name="username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} placeholder='Enter your username' className='mt-2 mb-2 px-2 w-62 mx-auto outline-none border-1 border-base-300' />

            <span>Email</span>
            <input type="email" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder='Enter your email' className='mt-2 mb-2 px-2 w-62 mx-auto outline-none border-1 border-base-300' />

            <span>Password</span>
            <input type="password" name="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder='Enter your password' className='mt-2 mb-2 px-2 w-62 mx-auto outline-none border-1 border-base-300' />

            <span>Contact Number</span>
            <input type="number" name="number" value={form.contact_number} onChange={e => setForm({ ...form, contact_number: e.target.value })} placeholder='Enter your contact number' className='mt-2 px-2 mb-2 w-62 mx-auto outline-none border-1 border-base-300' />

            <span>Address</span>
            <input type="text" name="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder='Enter your address' className='mt-2 px-2 w-62 mx-auto outline-none border-1 border-base-300' />

            <div className='mt-4'>Already Have Account?
              <span className='mx-1 text-gray-600 underline cursor-pointer' onClick={() => {
                document.getElementById('my_modal_8').checked = false;
                document.getElementById('my_modal_7').checked = true;
              }}>
                Login
              </span>
            </div>
            <button onClick={handleSignup} className='items-center mx-auto mt-5 border-1 bg-[#100C08] text-[#FEFEFA] w-19 h-9 cursor-pointer'>
              Signup
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_8">Close</label>
      </div>
    </div>
  );
}

export default Signup;
