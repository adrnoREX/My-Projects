// import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar'
// import axios from 'axios';
// import Sidebar from '../Sidebar';
// import SliderComponent from '../Slider';
// import Footer from '../Footer';
// import SliderHome from '../SliderHome';

// function Women() {
//   const [items, setItems] = useState([])

//   //fetch category items 
//   const fetchCategoryItems = async (category) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/clothes/category/${category}`)
//       setItems(response.data)
//     } catch (error) {
//       console.error("Error fetching category data:", error)
//     }
//   }

//   useEffect(() => {
//       // Fetch Women category items when the component is mounted
//       fetchCategoryItems('Women')
//     }, [])

//   return (
//     <>
//       <div>
        
//         <div className='flex'>
          
//           {/* Pass the fetched items to SliderComponent */}
//           <SliderHome items={items} />
//         </div>
        
//       </div>
//     </>
//   )
// }

// export default Women

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SliderHome from '../SliderHome';

function Women() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategoryItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/clothes/category/Women');
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching Women items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryItems();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading Women’s Trends...</div>;
  }

  return (
    <>
      {items.length > 0 ? (
        <SliderHome items={items} />
      ) : (
        <div className="text-center py-10 text-gray-500">No items found in Women category</div>
      )}
    </>
  );
}

export default Women;