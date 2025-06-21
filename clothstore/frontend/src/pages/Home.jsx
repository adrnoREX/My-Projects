import React from "react";
import { Link } from "react-router-dom";
import girl from "../assets/girl.png";
import fashion_girl from '../assets/fashion girl.jpg';
import app_store from '../assets/app_store.png'
import play_store from '../assets/play_store.png'
import Women from "./categories/Women";
import Men from "./categories/Men";
import Kids from "./categories/Kids";
import { motion } from 'framer-motion';
const sentence = "BOOST YOUR      STYLE SENSE";
const sentence1 = "Our Fabrics will be                    Your Feathers"

function Home() {

return (
    <div className="max-w-screen mt-64">
        <div className="max-w-96  mx-56 mt-43">
            <div className=" font-bold flex-2 text-black text-5xl ">
                {sentence.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: index * 0.05, // delay per character
                        duration: 1.3,
                        ease: "easeOut"
                    }}
                    className="inline-block"
                    >
                    {char === " " ? "\u00A0" : char} {/* preserve spaces */}
                </motion.span>
                ))}
            </div>
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt harum non qui. Consequatur libero nihil fugit ea dolores, quaerat labore sed modi quos tempora architecto officia maiores molestias.
                <div className="max-w-36 my-8 py-3 border-2 text-center hover:bg-base-300"><Link className="" to="/shop">SHOP NOW</Link></div>
            <div className="relative -my-96 -top-16 mx-96 ">
                <img src={girl} className="max-w-3xl mx-14  " alt="kutus" srcset="" />
            </div>
        </div>
        <div className="mt-80 "><hr className="border-y-1 border-y-gray-300" /></div>
        <div className=" min-h-sm mt-20 ">
            <div className="mt-12">
                <img src={fashion_girl} className="max-w-xl mx-64 h-1/12 " alt="" srcset="" />
            </div>
            <div className=" max-w-screen relative -my-96 -top-60 mx-100 left-96">
                <div className="text-5xl font-bold  mx-4">
                    {sentence1.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.05, // delay per character
                            duration: 1.3,
                            ease: "easeOut"
                        }}
                        className="inline-block"
                        >
                        {char === " " ? "\u00A0" : char} {/* preserve spaces */}
                    </motion.span>
                    ))}
                </div>
                <div className="max-w-78 mx-34 mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat illum incidunt recusandae officiis nesciunt minima nam ea amet asperiores laudantium laborum, <br /> <div className="mt-6">aspernatur quaerat ipsa! Pariatur architecto odio dolores eius, tempore saepe vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corrupti harum suscipit recusandae voluptatibus ipsum deserunt ipsa quasi inventore repellendus. </div>
                    <div className="mt-10 border-2 max-w-44 py-3 px-5 text-center"><Link className="mt-10" to="">FIND OUT MORE</Link></div>
                </div>
            </div>
        </div>

        <div className="my-72 py-16 ">
            <div className="max-w-1/2  relative mt-2 "><hr className="border-y-1 border-y-gray-300" /></div>
            <div className="relative left-6 -top-3 px-96 mx-92">MEN'S TRENDS</div>
            <div className="w-168 -top-6 mx-116 relative  left-96"><hr className="border-y-1 border-y-gray-300" /></div>
            <Men/>
            <div className="max-w-1/2  relative mt-20 "><hr className="border-y-1 border-y-gray-300" /></div>
            <div className="relative left-6 -top-3 px-96 mx-92">WOMEN'S TRENDS</div>
            <div className="w-168 -top-6 mx-116 relative  left-96"><hr className="border-y-1 border-y-gray-300" /></div>
            <Women/>
            <div className="max-w-1/2  relative mt-20 "><hr className="border-y-1 border-y-gray-300" /></div>
            <div className="relative left-6 -top-3 px-96 mx-92">KIDS'S TRENDS</div>
            <div className="w-168 -top-6 mx-116 relative  left-96"><hr className="border-y-1 border-y-gray-300" /></div>
            <Kids/>
        </div>

        <div className="max-w-3xl mx-auto text-center relative -top-20 -mt-45">
            <div className="text-5xl">
                For Better Experience Download Cloth Store App
            </div>
            <div className="flex mt-8 justify-center">
                <div className="w-50 "><img src={play_store} className="px-1 " alt="" srcset="" /></div>
                <div className="mx-1 w-47"><img src={app_store} className="px-1" alt="" srcset="" /></div>
            </div>

        </div>
    </div>  
);
}

export default Home;