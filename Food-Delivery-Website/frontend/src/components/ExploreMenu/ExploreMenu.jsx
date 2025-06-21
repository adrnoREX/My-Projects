// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'
// const ExploreMenu = ({category, setCategory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//         <h1>Explore Our Menu</h1>
//         <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//         <div className="explore-menu-list">
//             {menu_list.map((item, index)=>{
//                 return (
//                         <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
//                             <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                             <p>{item.menu_name}</p>
//                         </div>   
//                 )
//             })}
//         </div>
//         <hr />
//     </div>
//   )
// }

// export default ExploreMenu

import React, { useRef } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-container">
        <button className="scroll-arrow left" onClick={scrollLeft}>&lt;</button>
        <div className="explore-menu-list" ref={scrollRef}>
          {menu_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <button className="scroll-arrow right" onClick={scrollRight}>&gt;</button>
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
