import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Card({ item }) {

  const navigate = useNavigate();

  return (
    <div className="bg-base-100 w-66 rounded-md mb-7 -px-10 shadow-2xl">
      <figure className=''>
        <img className='w-66 h-84'
          src={item.imageUrl} // Use the image URL from the fetched item
          alt={item.name}
        />
      </figure>
      <div className="card-body cursor-default">
        <h2 className="card-title">{item.name}</h2> {/* Use the name from the fetched item */}
        <p>{item.description}</p> {/* Use the description from the fetched item */}
        <div className="card-actions justify-between mt-2">
          <h2 className="card-price font-semibold text-lg">₹{item.price}</h2>
          <button
            onClick={() => {
              const user = localStorage.getItem("user");
              if (user) {
                navigate("/buynow", { state: { item } });
              } else {
                // Open login modal if user not logged in
                document.getElementById("my_modal_7").checked = true;
              }
            }}
            className="hover:text-gray-700 font-semibold px-4 py-2 border-2 cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
