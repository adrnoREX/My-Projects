// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// function Sidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryClick = (category, route) => {
//     navigate(route);
//   };
    
//   const subcategoriesMen = [
//     { name: 'Tshirts', route: '/shop' },
//     { name: 'Sweatshirts', route: '/shop/full_slip_tshirts' },
//     { name: 'Formal Shirts', route: '/shop/formal_shirts' },
//     { name: 'Casual Shirts', route: '/shop/casual_shirts' },
//     { name: 'Sweaters', route: '/shop/men_sweaters' },
//     { name: 'Jackets', route: '/shop/men_jackets' },
//     { name: 'Blazers', route: '/shop/men_blazers' },
//     { name: 'Suits', route: '/shop/suits' },
//     { name: 'Rain Coats', route: '/shop/rain_coats' },
//     { name: 'Jeans', route: '/shop/men_jeans' },
//     { name: 'Casual trousers', route: '/shop/casual_trousers' },
//     { name: 'Formal trousers', route: '/shop/formal_trousers' },
//     { name: 'Shorts', route: '/shop/men_shorts' },
//     { name: 'Track Pants', route: '/shop/track_pants' },
//     { name: 'Kurtas', route: '/shop/kurtas' },
//     { name: 'Sherwanis', route: '/shop/sherwanis' },
//     { name: 'Dhotis', route: '/shop/dhotis' }
//   ];

//   const subcategoriesWomen = [
//     { name: 'Sarees', route: '/shop/sarees' },
//     { name: 'Dupattas & Shawls', route: '/shop/dupattas&shawls' },
//     { name: 'Tshirts', route: '/shop/shirts' },
//     { name: 'Leggings', route: '/shop/leggins' },
//     { name: 'Salwar', route: '/shop/salwar' },
//     { name: 'Kurtis', route: '/shop/kurtis' },
//     { name: 'Jeans', route: '/shop/women_jeans' },
//     { name: 'Palazzos & Skirts', route: '/shop/palazzos' },
//     { name: 'Trousers', route: '/shop/trousers' },
//     { name: 'Shorts & Skirts', route: '/shop/women_shorts' },
//     { name: 'Sweaters', route: '/shop/women_sweaters' },
//     { name: 'Jackets', route: '/shop/women_jackets' },
//     { name: 'Blazers & Waistcoats', route: '/shop/women_blazers' },
//   ];

//   const subcategoriesKids = [
//     { name: 'Boys Shirts', route: '/shop/boys_shirts' },
//     { name: 'Boys Shorts', route: '/shop/boys_shorts' },
//     { name: 'Boys Jeans', route: '/shop/boys_jeans' },
//     { name: 'Boys Sweatshirts', route: '/shop/boys_sweatshirts' },
//     { name: 'Boys Party Wear', route: '/shop/boys_party_wear' },
//     { name: 'Girls Shorts & Skirts', route: '/shop/girls_shorts' },
//     { name: 'Girls Shirts', route: '/shop/girls_shirts' },
//     { name: 'Girls Jeans', route: '/shop/girls_jeans' },
//     { name: 'Girls Trousers', route: '/shop/girls_trousers' },
//     { name: 'Girls Sweatshirts', route: '/shop/girls_sweatshirts' },
//     { name: 'Girls Dresses', route: '/shop/girls_dresses' },
//     { name: 'Girls Tops', route: '/shop/girls_tops' },
//     { name: 'Girls Kurta Sets', route: '/shop/girls_kurta_sets' },
//     { name: 'Girls Leggings', route: '/shop/girls_leggings' },
//   ]

//   return (
//     <>
//     <div className='sidebar mb-45 w-82 -mt-14 shadow-2xl'>
//       {/* Men */}
//       <hr className='border-t-2 border-base-300' />
//       <div className='mx-6 mt-4 font-bold'>FILTER BY CATEGORIES</div>
//       <div className='mt-3 mx-6 mb-4 text-start flex flex-col'>
//         <div className='mb-2 font-semibold'>Men</div>
//         {subcategoriesMen.map(({ name, route}) => (
//           <label key={name} className='flex items-center space-x-2 my-1 cursor-pointer'>
//             <input 
//               type="checkbox"
//               checked={location.pathname === route}
//               onChange={() => handleCategoryClick(name, route)}
//               className='accent-pink-600 w-4 h-4 border-gray-300 rounded cursor-pointer'
//             />
//             <span>{name}</span>
//           </label>
//         ))}
//       </div>
//       {/* Women */}
//       <hr className='border-t-2 border-base-300' />
//       <div className='mt-2 mx-6 mb-4 text-start flex flex-col'>
//         <div className='mb-2 mt-2 font-semibold'>Women</div>
//         {subcategoriesWomen.map(({ name, route}) => (
//           <label key={name} className='flex items-center space-x-2 my-1 cursor-pointer'>
//             <input 
//               type="checkbox"
//               checked={location.pathname === route}
//               onChange={() => handleCategoryClick(name, route)}
//               className='accent-pink-600 w-4 h-4 border-gray-300 rounded cursor-pointer'
//             />
//             <span>{name}</span>
//           </label>
//         ))}
//       </div>
//       {/* Kids */}
//       <hr className='border-t-2 border-base-300' />
//       <div className='mt-2 mx-6 mb-4 text-start flex flex-col'>
//         <div className='mb-2 mt-2 font-semibold'>Kids</div>
//         {subcategoriesKids.map(({ name, route}) => (
//           <label key={name} className='flex items-center space-x-2 my-1 cursor-pointer'>
//             <input 
//               type="checkbox"
//               checked={location.pathname === route}
//               onChange={() => handleCategoryClick(name, route)}
//               className='accent-pink-600 w-4 h-4 border-gray-300 rounded cursor-pointer'
//             />
//             <span>{name}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

// export default Sidebar;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (name, route) => {
    navigate(route);
  };

  const subcategoriesMen = [
    { name: 'Tshirts', route: '/shop' },
    { name: 'Sweatshirts', route: '/shop/full_slip_tshirts' },
    { name: 'Formal Shirts', route: '/shop/formal_shirts' },
    { name: 'Casual Shirts', route: '/shop/casual_shirts' },
    { name: 'Sweaters', route: '/shop/men_sweaters' },
    { name: 'Jackets', route: '/shop/men_jackets' },
    { name: 'Blazers', route: '/shop/men_blazers' },
    { name: 'Suits', route: '/shop/suits' },
    { name: 'Rain Coats', route: '/shop/rain_coats' },
    { name: 'Jeans', route: '/shop/men_jeans' },
    { name: 'Casual trousers', route: '/shop/casual_trousers' },
    { name: 'Formal trousers', route: '/shop/formal_trousers' },
    { name: 'Shorts', route: '/shop/men_shorts' },
    { name: 'Track Pants', route: '/shop/track_pants' },
    { name: 'Kurtas', route: '/shop/kurtas' },
    { name: 'Sherwanis', route: '/shop/sherwanis' },
    { name: 'Dhotis', route: '/shop/dhotis' }
  ];

  const subcategoriesWomen = [
    { name: 'Sarees', route: '/shop/sarees' },
    { name: 'Dupattas & Shawls', route: '/shop/dupattas&shawls' },
    { name: 'Tshirts', route: '/shop/shirts' },
    { name: 'Leggings', route: '/shop/leggins' },
    { name: 'Salwar', route: '/shop/salwar' },
    { name: 'Kurtis', route: '/shop/kurtis' },
    { name: 'Jeans', route: '/shop/women_jeans' },
    { name: 'Palazzos & Skirts', route: '/shop/palazzos' },
    { name: 'Trousers', route: '/shop/trousers' },
    { name: 'Shorts & Skirts', route: '/shop/women_shorts' },
    { name: 'Sweaters', route: '/shop/women_sweaters' },
    { name: 'Jackets', route: '/shop/women_jackets' },
    { name: 'Blazers & Waistcoats', route: '/shop/women_blazers' },
  ];

  const subcategoriesKids = [
    { name: 'Boys Shirts', route: '/shop/boys_shirts' },
    { name: 'Boys Shorts', route: '/shop/boys_shorts' },
    { name: 'Boys Jeans', route: '/shop/boys_jeans' },
    { name: 'Boys Sweatshirts', route: '/shop/boys_sweatshirts' },
    { name: 'Boys Party Wear', route: '/shop/boys_party_wear' },
    { name: 'Girls Shorts & Skirts', route: '/shop/girls_shorts' },
    { name: 'Girls Shirts', route: '/shop/girls_shirts' },
    { name: 'Girls Jeans', route: '/shop/girls_jeans' },
    { name: 'Girls Trousers', route: '/shop/girls_trousers' },
    { name: 'Girls Sweatshirts', route: '/shop/girls_sweatshirts' },
    { name: 'Girls Dresses', route: '/shop/girls_dresses' },
    { name: 'Girls Tops', route: '/shop/girls_tops' },
    { name: 'Girls Kurta Sets', route: '/shop/girls_kurta_sets' },
    { name: 'Girls Leggings', route: '/shop/girls_leggings' },
  ];

  const renderCategory = (label, subcategories) => (
    <>
      <div className='mt-2 mx-6 mb-4 space-y-1 text-start '>
        <div className='mb-2 mt-2   font-semibold'>{label}</div>
        {subcategories.map(({ name, route }) => (
          <label key={name} className='flex items-center  space-x-2 cursor-pointer'>
            <input 
              type="radio"
              name="category"
              checked={location.pathname === route}
              onChange={() => handleCategoryClick(name, route)}
              className='w-5 h-5 appearance-none border-1 border-black rounded-full checked:bg-black checked:shadow-[inset_0_0_0_3px_white] cursor-pointer'
            />
            <span>{name}</span>
          </label>
        ))}
      </div>
    </>
  );

  return (
    <div className='sidebar mb-45 w-82 mt-27 shadow-2xl'>
      <div className='mx-6 mt-8 font-bold'>FILTER BY CATEGORIES</div>

      <div className=''>
          {renderCategory('Men', subcategoriesMen)}
          <hr className='border-t-2 border-base-300' />
          {renderCategory('Women', subcategoriesWomen)}
      </div>
          <hr className='border-t-2 border-base-300' />
          {renderCategory('Kids', subcategoriesKids)}
    </div>
  );
}

export default Sidebar;
