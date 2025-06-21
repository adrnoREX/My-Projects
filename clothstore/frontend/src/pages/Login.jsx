import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data && data.id) {
        localStorage.setItem("user", JSON.stringify(data)); // ✅ save user object
        localStorage.setItem("id", data.id);

        onLogin(data); // ✅ pass user data to Navbar
        document.getElementById('my_modal_7').checked = false; // close modal
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className='p-2 px-4 -mt-2 hover:bg-base-200'>
        <label htmlFor="my_modal_7" className="rounded-none cursor-pointer">Login</label>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-75 text-black rounded-none">
          <h2 className="text-lg font-bold mb-4 mx-24">Login</h2>
          <div className='flex flex-col items-left'>
            <span>Username or Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your username/email'
              className='mt-2 mb-2 px-2 w-62 mx-auto outline-none border-1 border-base-300'
            />
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='mt-2 px-2 w-62 mx-auto outline-none border-1 border-base-300'
            />
            <div className='mt-4'>Not Yet Registered?
              <span className='mx-1 text-gray-600 underline cursor-pointer' onClick={() => {
                document.getElementById('my_modal_7').checked = false;
                document.getElementById('my_modal_8').checked = true;
              }}>
                Signup
              </span>
            </div>
            <button
              onClick={handleLogin}
              className='items-center mx-auto mt-5 border-1 bg-[#100C08] text-[#FEFEFA] w-18 h-9 cursor-pointer'>
              Login
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  );
}

export default Login;
