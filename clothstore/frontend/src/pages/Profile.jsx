import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const id = localStorage.getItem('id'); // Ensure this is set at login

    useEffect(() => {
    const fetchUserProfile = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);
        setUser(response.data);
        setFormData(response.data);
        } catch (error) {
        console.error('Error fetching user profile:', error);
        }
    };

    if (id) {
        fetchUserProfile();
    }
    }, [id]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
    try {
        await axios.put(`http://localhost:8080/api/users/${id}`, formData);
        setUser(formData);
        setEditMode(false);
        alert('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
    }
    };

    if (!user) {
    return <div className="text-center mt-10 text-xl">Loading profile...</div>;
    }

    return (
    <div className="max-w-2xl mx-auto p-6 bg-white text-gray-600 shadow-lg rounded-xl mt-10">
        <h2 className="text-3xl font-bold text-center  mb-6">User Profile</h2>
        <div className="space-y-4 text-lg">
        <div>
            <label className="font-semibold">Username:</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border-3 border-gray-300 rounded px-2 py-1 mt-1"
            />
        </div>
        <div>
            <label className="font-semibold">Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border-3 border-gray-300 rounded px-2 py-1 mt-1"
            />
        </div>
        <div>
            <label className="font-semibold">Contact:</label>
            <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border-3 border-gray-300 rounded px-2 py-1 mt-1"
            />
        </div>
        <div>
            <label className="font-semibold">Address:</label>
            <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border-3 border-gray-300 rounded px-2 py-1 mt-1"
            />
        </div>
        <div>
            <label className="font-semibold">Password:</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border-3 border-gray-300 rounded px-2 py-1 mt-1"
            />
        </div>

        {!editMode ? (
            <button
            onClick={() => setEditMode(true)}
            className="bg-black text-white px-6 py-2 relative mx-60 rounded mt-4 hover:bg-gray-900"
            >
            Edit Profile
            </button>
        ) : (
            <div className="flex space-x-4 mt-4">
            <button
                onClick={handleSave}
                className="bg-gray-600 text-white px-4 py-2 relative mx-60 rounded mt-4 hover:bg-gray-700"
            >
                Save
            </button>
            <button
                onClick={() => {
                setEditMode(false);
                setFormData(user); // reset changes
                }}
                className="bg-gray-400 text-white px-4 py-2 fixed mx-80 rounded mt-4 hover:bg-gray-500"
            >
                Cancel
            </button>
            </div>
        )}
        </div>
    </div>
    );
};

export default Profile;

