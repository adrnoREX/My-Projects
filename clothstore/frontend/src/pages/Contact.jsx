import React from 'react';
import Navbar from './Navbar';

function Contact() {
    return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto mt-22 px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>

        <div className="mb-8">
        <p className="text-lg"><span className="font-semibold">Phone:</span> +91 9876543210</p>
        <p className="text-lg"><span className="font-semibold">Email:</span> support@yourstore.com</p>
        <p className="text-lg"><span className="font-semibold">Address:</span> 123, Park Street, Kolkata, India</p>
        <p className="text-lg mt-2 text-gray-600">
            For order-related queries or general support, feel free to reach out using the details above, or send us a message using the form below.
        </p>
        </div>

        <form className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" className="w-full border outline-none border-gray-300 rounded px-3 py-2 " placeholder="Enter your name" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" className="w-full border outline-none border-gray-300 rounded px-3 py-2 " placeholder="Enter your email" />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="w-full border outline-none border-gray-300 rounded px-3 py-2 " placeholder="Type your message..."></textarea>
        </div>

        <button type="submit" className="bg-black text-white px-6 py-2 mx-90 w-40 rounded hover:bg-gray-900 transition duration-200">
            Send Message
        </button>
        </form>
    </div>
    </>
    );
}

export default Contact;
