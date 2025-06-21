import React from 'react';
import Navbar from './Navbar';

const About = () => {
    return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto mt-35 p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
        This website has been developed as part of our college major project by a team of four passionate students.
        Our aim was to create a functional, user-friendly, and visually engaging platform while applying the skills and technologies we've learned throughout our academic journey.
        </p>
        <p className="text-lg mb-4">
        From backend development and database integration to frontend design and user experience, we have worked collaboratively to ensure this project showcases our abilities and teamwork.
        </p>
        <p className="text-lg mb-4">
        We hope this project not only meets the requirements of our curriculum but also serves as a solid foundation for future development and learning.
        </p>
        <p className="text-lg font-semibold mt-6">— The Development Team</p>
    </div>
    </>
    );
};

export default About;
